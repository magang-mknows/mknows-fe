import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TProfile = {
  _id: string;
  fullname: string;
  email: string;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type TProfileResponse = TMetaResponseSingle<TProfile>;
