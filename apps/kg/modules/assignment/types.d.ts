import { TMetaResponse } from '@mknows-frontend-services/utils';

type TAssignmentUser = {
  id: string;
  student_id: string;
  subject_id: string;
  date_taken: string;
  date_finished: any;
  status: string;
  proof: any;
  final_score: any;
  semester: number;
  subject_to_student_subject_1: SubjectToStudentSubject1;
};

type SubjectToStudentSubject1 = {
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
  subject_session: SubjectSession[];
  teacher_subject: TeacherSubject;
};

type SubjectSession = {
  id: string;
  subject_id: string;
  session_no: number;
  is_sync: boolean;
  type: string;
  description: string;
  link: string;
};

type TeacherSubject = {
  id: string;
  full_name: string;
};

export type TMyAssignmentResponse = TMetaResponse<TAssignmentUser>;
