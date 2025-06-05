import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "./prisma";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			firstName?: string | null;
			lastName?: string | null;
			email?: string | null;
			image?: string | null;
			username?: string | null;
		};
	}
}

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.password) {
					throw new Error("Invalid credentials");
				}

				const isPasswordValid = await compare(
					credentials.password,
					user.password
				);

				if (!isPasswordValid) {
					throw new Error("Invalid credentials");
				}

				return {
					id: user.id.toString(),
					email: user.email,
					username: user.username,
					firstName: user.firstName,
					lastName: user.lastName,
				};
			},
		}),
	],
	callbacks: {
		async session({ token, session }) {
			if (token) {
				session.user.id = token.id as string;
				session.user.firstName = token.firstName as string;
				session.user.lastName = token.lastName as string;
				session.user.email = token.email;
				session.user.username = token.username as string;
			}

			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.firstName = (user as any).firstName;
				token.lastName = (user as any).lastName;
				token.email = user.email;
				token.username = (user as any).username;
			}
			return token;
		},
	},
};
