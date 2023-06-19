import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export interface IUserItem {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  user_role: IUserRole;
  user_administration: TUserAdministration;
}

export interface IUserRole {
  id: string;
  role: IRole;
}

export interface IRole {
  id: string;
  role_name: string;
}

export type TUserAdministration = {
  id: string;
  full_name: string;
  employee_id: string;
  employee_id_number: string;
  department: string;
  email: string;
  company: string;
  status: string;
  admin_id: string;
  type: string;
  leader: string;
};

export type TUserDetailResponse = TMetaResponseSingle<IUserItem>;
