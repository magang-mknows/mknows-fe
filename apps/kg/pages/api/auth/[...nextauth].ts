import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginByGoogleRequest, loginRequest } from '../../../modules';
import { TLoginData } from '../../../modules';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const { data } = await loginRequest(credentials);

          return data;
        } catch (error) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.errors[0]?.message[0]);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    //TODO handle Remember me
    // maxAge: req.body.rememberMe === 'true' ? 30 * 24 * 60 * 60 : 2 * 60 * 60,
    maxAge: 2 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && account) {
        try {
          const response = await loginByGoogleRequest({
            access_token: account.access_token,
          });
          account.access_token = response.data.access_token;
          user.phone = response.data.user.phone;
          user.role = response.data.user.role;
          user.name = response.data.user.name;
          user.email = response.data.user.email;
        } catch (error) {
          return `/auth/login?error=${error.response.data?.message}`;
        }
      }

      if (user) return true;
      return false;
    },
    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      // Persist the OAuth access_token to the token right after signin
      if (account?.provider === 'google' && account) {
        token.access_token = account.access_token;
      } else if (account?.provider === 'login' && currentUser) {
        token.access_token = currentUser.access_token;
        currentUser.name = user.user.name;
        currentUser.email = user.user.email;
        currentUser.phone = user.user.phone;
        currentUser.role = user.user.role;
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.phone = token.phone;
      session.user.role = token.role;
      session.access_token = token?.access_token;
      session.expires_at = token?.expires_at;
      return session;
    },
  },
};

export default NextAuth(authOptions);
