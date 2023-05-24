import {
  TMetaErrorResponse,
  TMetaResponseSingle,
} from '@mknows-frontend-services/utils';

export interface ISubjectItem {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
  description: string;
  subject_department: SubjectDepartment[];
}

export interface ISubjectDepartmentItem {
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
  batch_id?: string;
}

export type TSubjectResponse = TMetaResponseSingle<ISubjectItem>;

export type TKRSItem = {
  id: string;
  date_taken: string;
  employee_id: string;
  subject_id: string;
  status: string;
  batch: number;
  batch_id: string;
  created_at: string;
  updated_at: string;
  date_finished: string;
  final_score: string;
  deleted_at: string;
};

export type TAskKRSResponse = TMetaErrorResponse<TKRSItem>;

export interface IMyWorkPlanItem {
  pending: Pending;
  ongoing: Ongoing;
  draft: Draft;
  total_plan_credit: number;
}

export interface Pending {
  subjects: Subject[];
  total_credit: number;
}

export interface Subject {
  name: string;
  credit: number;
  subject_id: string;
  employee_subject_id: string;
}

export interface Ongoing {
  subjects: [];
  total_credit: number;
}

export interface Draft {
  subjects: [];
  total_credit: number;
}

export type TMyWorkPlanResponse = TMetaResponseSingle<IMyWorkPlanItem>;
