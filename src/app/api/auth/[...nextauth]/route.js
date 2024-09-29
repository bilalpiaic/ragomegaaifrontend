import { dbConnect } from "@/config/dbConfig";
import { User } from "@/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

dbConnect()
const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { type: "text", label: "Email" },
                password: { type: "text", label: "Password" }
            },
            async authorize(credentials) {
                const user = await User.findOne({ "user.email": credentials.email })
                if (user) {
                    if (user.user.password === credentials.password)
                        return { email: user.user.email, name: user.user.username }
                }
                return null
            }
        }),
        GithubProvider({
            name: "github",
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    pages: {
        signIn: "/Login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
              token.provider = account.provider; // Add provider info to token
            }
            return token;
          },
        async session({ session, token }) {
            session.user.provider = token.provider; // Add provider information to the session
            return session;
          },
        // other callbacks...
        async redirect({ baseUrl }) {
            return baseUrl
        },
      }
})
export { handler as GET, handler as POST }