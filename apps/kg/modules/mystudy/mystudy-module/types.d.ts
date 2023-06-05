import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

type TMyStudyItem = {
  dataMajor: TDataMajor;
  dataSubjects: TDataSubject[];
};

export type TDataMajor = {
  id: string;
  name: string;
  thumbnail: string;
  head_of_major: string;
  description: string;
  student_count: number;
  subject_count: number;
  credit_count: number;
  current_semester: number;
};

export type TDataSubject = {
  id: string;
  subject_code: string;
  name: string;
  thumbnail: string;
  teacher_name: string;
  credit: number;
  session_count: number;
  progress_percentage: number;
};

export type TMyStudyResponse = TMetaResponseSingle<TMyStudyItem>;
