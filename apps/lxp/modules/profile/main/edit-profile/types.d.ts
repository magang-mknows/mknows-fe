import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export interface IUserItem {
  user?: {
    id?: string;
    full_name?: string;
    user_name?: string;
    email?: string;
    email_verified_at?: string;
    avatar?: string;
    gender?: string;
    phone_number?: string;
    user_role?: UserRole;
  };
}

export interface IUserRole {
  id: string;
  role: Role;
}

export interface IRole {
  id: string;
  role_name: string;
}

export interface IUserProfile {
  avatar: string;
}

export type TUserProfilePayload = {
  avatar: Blob;
};

export interface IUpdateUserItem extends IUserItem {
  updated_at: string;
}

export type IUpdateUserPayload = {
  full_name?: string;
  phone_number?: string;
  gender?: string;
  avatar?: string;
};

export type TUserDataResponse = TMetaResponseSingle<IUserItem>;
export type TUserProfileResponse = TMetaResponseSingle<IUserProfile>;
export type TUpdateUserResponse = TMetaResponseSingle<IUpdateUserItem>;
