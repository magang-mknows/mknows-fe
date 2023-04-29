import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

type TDataUser = {
  id: string;
  email: string;
  password: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  user_major: TUserMajor;
};

type TUserMajor = {
  id: string;
  student_id: string;
  major_id: string;
  status: string;
  major: TMajor;
};

type TMajor = {
  id: string;
  name: string;
  thumbnail: string;
  slug: string;
  faculty_id: string;
};

type TMyStudy = {
  dataUser: TDataUser;
  manyUserJoinMajors: number;
};

export type TMyStudyResponse = TMetaResponseSingle<TMyStudy>;
