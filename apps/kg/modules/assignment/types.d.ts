import { TMetaResponse } from '@mknows-frontend-services/utils';

type TAssignmentUser = {
  assignment: Assignment;
  student_progress: StudentProgress;
};

type TAssignment = {
  id: string;
  documents: string[];
  title: string;
  desc: string;
  duration_days: number;
  session_assignment: SessionAssignment;
};

type TSessionAssignment = {
  session_no: number;
  subject_session: SubjectSession;
};

type TSubjectSession = {
  id: string;
  name: string;
  teacher_subject: TeacherSubject;
};

type TTeacherSubject = {
  full_name: string;
};

type TStudentProgress = {
  status: string;
  type: string;
  score: any;
  is_late: boolean;
  assignment_answer: string[];
  timestamp_taken: string;
  timestamp_submitted: string;
  deadline: string;
};

export type TMyAssignmentResponse = TMetaResponse<TAssignmentUser>;
