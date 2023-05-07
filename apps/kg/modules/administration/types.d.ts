import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type T = {
  title: string;
  course: string;
  date: string;
  time: string;
  id: number;
  category: string;
};

export type TStatusReturnAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export type TAdministrationItem = {
  id: string;
  user_id: string;
  status: string;
  type: string;
  action_by: string;
  biodata: TBiodataAdm;
  familial: TFamilyAdm;
  file: TFileAdm;
};

export type TBiodataAdm = {
  gender: string;
  phone: string;
  birthdate: string;
  birthplace: string;
  address: string;
  last_education: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: string;
};

export type TFamilyAdm = {
  father_name: string;
  father_occupation: string;
  father_salary: string;
  mother_name: string;
  mother_occupation: string;
  mother_salary: string;
  self_salary: string;
  live_with: string;
  tuition_payer: string;
};

export type TFileAdm = {
  id_card: File;
  diploma_certificate: File;
  family_card: File;
  photo: File;
  transcript: File;
  letter_of_recommendation: File;
};

export type TBiodataResponse = TMetaResponseSingle<TBiodataAdm>;
export type TFamilyResponse = TMetaResponseSingle<TFamilyAdm>;
export type TFileResponse = TMetaResponseSingle<TFileAdm>;
