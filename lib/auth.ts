
import { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				const testUser = {
					id: "1",
					email: "asdf@gmail.com",
					password: "asdf",
					name: "Test User"
				}

				if (credentials?.email === testUser.email &&
					credentials?.password === testUser.password) {
					return testUser
				}

				return null
			}
		})
	],
	session: {
		strategy: "jwt"
	},
	pages: {
		signIn: "/login"
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.email = user.email
			}
			return token
		},
		async session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.id
				}
			}
		}
	}
}

export const getAuthSession = () => getServerSession(authOptions)
