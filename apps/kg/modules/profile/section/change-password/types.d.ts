import { TMetaResponse } from '@mknows-frontend-services/utils';

type TPassword = {
  message: string;
};

export type TPasswordPayload = {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
};

export type TPasswordResponse = TMetaResponse<TAvatar>;
