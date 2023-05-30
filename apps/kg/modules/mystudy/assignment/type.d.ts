import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type Instruction = {
  matkul: string;
  pertemuan: number;
  dosen: string;
  waktu: string;
  file: string;
  deadline: string;
};

// Service API

export type TAssignmentItem = {
  assignment: TAssignment;
  student_progress: TStudentProgress;
};

type TAssignment = {
  id: string;
  documents: string[];
  title: string;
  desc: string;
  duration_days: number;
  session_assignment: TSessionAssignment;
};

type TSessionAssignment = {
  session_no: number;
  subject_session: TSubjectSession;
};

type TSubjectSession = {
  id: string;
  name: string;
  teacher_subject: TTeacherSubject;
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

export type TAssignmentResponse = TMetaResponseSingle<TAssignmentItem>;
