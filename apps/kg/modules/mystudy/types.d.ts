import {
  TMetaResponse,
  TMetaResponseSingle,
} from '@mknows-frontend-services/utils';

export type DataTypes = {
  setData: (val: Array<Data>) => void;
  getData: Array<Data>;
};

export type Data = {
  icon: StaticImageData;
  jumlah: string;
  detail: string;
  warna: string;
};

// SERVICE API

export type TSubject = {
  id: string;
  name: string;
  subject_code: string;
  degree: string;
  level: number;
  teacher_id: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  description: string;
  thumbnail: string;
  credit: number;
  slug: string;
  subject_id: string;
};

export type TSubjectResponse = TMetaResponse<TSubject>;

// MyStudy New Response

export type TMyStudyItem = {
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

export interface TDataSubject {
  id: string;
  subject_code: string;
  name: string;
  thumbnail: string;
  teacher_name: string;
  credit: number;
  session_count: number;
  progress_percentage: number;
}

export type TMyStudyResponse = TMetaResponseSingle<TMyStudyItem>;
