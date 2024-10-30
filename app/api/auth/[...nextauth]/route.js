import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { pool } from "@/config/dbConfig"

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
                const connection = await pool.connect()
                const temp = await connection.query(`SELECT * FROM users WHERE email=$1`,[credentials.email])
                const user = temp.rows[0]
                if (user) {
                    if (user.password === credentials.password)
                        return { email: user.email, name: user.username, isAdmin:user.isAdmin }
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
        async jwt({ token, user, account }) {
            if (user) {
                token.provider = account.provider; // Determine if the user logged in via GitHub or credentials
                if (account.provider === "credentials") {
                    token.isAdmin = user.isAdmin; // Pass isAdmin if using credentials
                } else if (account.provider === "github") {
                    // Check if the GitHub user is an admin
                    const connection = await pool.connect();
                    const result = await connection.query(`SELECT * FROM users WHERE email=$1`, [user.email]);
                    console.log(result);
                    
                    if (result.rows[0]) {
                        token.isAdmin = result.rows[0].isAdmin;
                    }
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.user.provider = token.provider; // Add provider information to the session
            session.user.isAdmin = token.isAdmin
            return session;
          },
        // other callbacks...
        async redirect({ baseUrl }) {
            return baseUrl
        },
      }
})
export { handler as GET, handler as POST }