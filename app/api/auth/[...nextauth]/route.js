import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/server/config/dbConn";
import User from "@/server/models/userModel";


const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        try {
          await connectDB();

          const userExists = await User.findOne({ email: profile.email })

          if (!userExists) {
            await User.create({
              name: profile.name,
              email: profile.email,
              image: profile.picture,
            })
          }

          profile = {
            ...profile,
            role: userExists?.role,
            id: userExists?._id.valueOf(),
            name: userExists?.name,
            email: userExists?.email,
            events: userExists?.events,
            payment: userExists?.payment,
            major: userExists?.major,
            projects: userExists?.projects,
          }

          return profile
        } catch (error) {
          console.error(error)
        }
      }
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      if (profile) {
        return true
      }
      return false
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },

    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          role: user.role,
          email: user.email,
          name: user.name,
          id: user.id,
          events: user.events,
          payment: user.payment,
          major: user.major,
          projects: user.projects,
        }
      }

      return token
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user = {
          ...session.user,
          role: token.role,
          email: token.email,
          name: token.name,
          id: token.id,
          events: token.events,
          payment: token.payment,
          major: token.major,
          projects: token.projects,
        }
      }

      return session
    },
    secret: process.env.NEXTAUTH_SECRET,
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }