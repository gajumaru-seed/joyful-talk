import bcrypt from "bcrypt";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

// 後で作成

export const auth = async () => {
    const session = await getServerSession();

    return session?.user;
};