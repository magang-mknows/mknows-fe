import { ReactNode } from 'react';

export type TLoginProps = {
  children: ReactNode;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginData = {
  access_token: string;
  refresh_token: string;
};
