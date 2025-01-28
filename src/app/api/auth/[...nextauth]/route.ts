import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    })
  ] };

const auth = NextAuth(options);