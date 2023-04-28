import type { User } from 'next-auth';
import type { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginByGooglePayload = {
  access_token?: string;
};

export type TLoginData = {
  access_token: string;
  refresh_token: string;
} & User;

export type TLoginResponse = TLoginData;
