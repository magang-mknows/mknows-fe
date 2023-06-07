import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TContract = {
  studentTakenMajor: boolean;
  dataMajor: DataMajor;
  dataSubjects: DataSubject[];
};

export interface DataMajor {
  id: string;
  name: string;
  current_semester: number;
  credit_count: number;
  head_of_major: string;
}

export interface DataSubject {
  id: string;
  name: string;
  thumbnail: string;
  enrolled_count: number;
  subject_code: string;
  credit: number;
  current_semester: number;
  session_count: number;
}

export type TContractResponse = TMetaResponseSingle<TContract>;
