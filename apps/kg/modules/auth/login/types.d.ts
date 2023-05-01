import {
  TMetaErrorResponse,
  TMetaResponse,
} from '@mknows-frontend-services/utils';
import type { User } from 'next-auth';

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginByGooglePayload = {
  credential?: string;
};

export type TLoginData = {
  access_token: string;
  refresh_token: string;
} & User;

export type TLoginResponse = TLoginData;

export type TLoginByGoogleData = {
  data: {
    token: {
      access_token: string;
      refresh_token: string;
    };
  };
};

export type TLoginByGoogleResponse = TMetaResponse<TLoginByGoogleData>;
