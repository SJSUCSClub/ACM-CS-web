import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/server/config/dbConn";
import User from "@/server/models/user";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
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
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    async jwt({ token, user }) {
      if (user) {
        const isAdmin = user.email === "dung.n.nguyen@sjsu.edu"

        token.role = isAdmin ? "admin" : "user"
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user = {
          ...session.user,
          role: token.role,
          id: token.id,
          email: token.email,
          name: token.name,
        }

        // session.user = token.user
      }
      return session
    },
    secret: process.env.NEXTAUTH_SECRET,
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }