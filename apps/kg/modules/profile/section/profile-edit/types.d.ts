import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export interface IUser {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: number;
  email_verified_at: string;
  user_role: UserRole;
}

export interface IUserRole {
  id: string;
  role: Role;
}

export interface IRole {
  id: string;
  role_name: string;
}

export type TUserDataResponse = TMetaResponseSingle<IUser>;
