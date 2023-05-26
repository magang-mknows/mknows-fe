/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginByGoogleRequest, loginRequest } from "../../../modules";
import { TLoginData } from "../../../modules";
import { refreshTokenRequest } from "../../../modules/auth/refresh-token/api";

export const refreshAccessToken = async (token: TLoginData) => {
  try {
    const data = await refreshTokenRequest({
      refresh_token: token.refresh_token,
    });

    return {
      ...token,
      access_token: data.access_token,
      refresh_token: data.refresh_token ?? token.refresh_token,
    };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });
          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === "string"
              ? error.response.data
              : error.response.data?.message,
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log(account);
      if (account?.provider === "google" && account) {
        try {
          const { data } = await loginByGoogleRequest({
            credential: account.id_token as string,
          });
          account.access_token = data?.token?.access_token;
          account.refresh_token = data?.token?.refresh_token;
        } catch (error: any) {
          return `/auth/login?error=${error.response.data?.message}`;
        }
      }

      if (user) return true;
      return false;
    },

    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === "google" && account) {
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      } else if (account?.provider === "login" && currentUser) {
        token.access_token = currentUser.access_token;
        token.refresh_token = currentUser.refresh_token;
        currentUser.name = user.name;
        currentUser.email = user.email;
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const jwt_token = {
        access_token: token?.access_token,
        refresh_token: token?.refresh_token,
      };
      session = {
        expires: token?.expires as string,
        user: {
          id: "w",
          name: token.name,
          email: token.email,
          token: jwt_token,
        },
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
