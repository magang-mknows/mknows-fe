import { ICommonMetaResponse } from '../../services/types';

export type TSubjectsItem = {
  id: string;
  teacher_id: string;
  department_id: string;
  name: string;
  subject_code: string;
  degree: string;
  level: number;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  description: string;
  thumbnail: string;
  credit: number;
  session_total_number: number;
  slug: string;
};

export type TDetailInformation = {
  name?: string;
  indicator?: string;
  study_experience?: string;
  teaching_materials?: string;
  basic_competencies?: string;
  tools_needed?: string;
  session_total_number?: number;
  id?: string;
};

export type TSubjectResponse = ICommonMetaResponse<TSubjectsItem>;
