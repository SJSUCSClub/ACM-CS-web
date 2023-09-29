import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/server/config/dbConn";
import User from "@/server/models/user";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    async jwt({ token, user }) {
      if (user) {
        // token.role = user.role
        // token.id = user.id
        // token.accessToken = user.accessToken
        // token.email = user.email
        // token.name = user.name
        // token.image = user.image

        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        // session.user = {
        //   ...session.user,
        //   role: token.role,
        //   id: token.id,
        //   accessToken: token.accessToken,
        //   email: token.email,
        //   name: token.name,
        //   image: token.image,
        // }

        session.user = token.user
      }
      return session
    },
    async signIn({ profile }) {
      console.log(profile)

      try {
        await connectDB();

        const userExists = await User.findOne({ email: profile.email })

        if (!userExists) {
          await User.create({
            name: profile.name,
            email: profile.email,
            image: profile.image,
          })
        }

        return true
      } catch (error) {
        console.error(error)
      }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }