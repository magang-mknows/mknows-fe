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

export type TMyStudyAssignmentItem = {
  assignment: TAssignment;
  student_progress: TStudentProgress;
};

export type TAssignment = {
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

export type TStudentProgress = {
  status: string;
  type: string;
  score: number;
  is_late: boolean;
  assignment_answer: string[] | null;
  timestamp_taken: string;
  timestamp_submitted: string;
  deadline: string;
};

export type TMyStudyAssignmentResponse = TMetaResponseSingle<TAssignmentItem>;

export type TPayloadRequest = {
  files: File[] | null;
  filesToDelete?: string[] | null;
};

export type TMyStudyAssignmentSubmissionPayload = {
  id: string;
  req: TPayloadRequest;
};
