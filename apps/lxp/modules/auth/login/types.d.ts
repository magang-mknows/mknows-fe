import { TMetaResponseSingle } from "@mknows-frontend-services/utils";
import type { User } from "next-auth";

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginByGooglePayload = {
  credentials: string;
};

export type TLoginData = {
  access_token: string;
  refresh_token: string;
} & User;

export type TLoginResponse = TLoginData;

export type TLoginByGoogleData = {
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

export type TLoginByGoogleResponse = TMetaResponseSingle<TLoginByGoogleData>;
