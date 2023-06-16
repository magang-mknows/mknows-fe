import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TuseMyStudyAssignmentItem = {
  getMyStudyAssignmentItem: TMyStudyAssignmentItem | null;
  setMyStudyAssignmentItem: (val: TMyStudyAssignmentItem) => void;
};

// Service API

export type TMyStudyAssignmentItem = {
  dataAssignment: TAssignment;
  employeeAssignmentProgress: TStudentProgress;
};

export type TAssignment = {
  id: string;
  documents: string[];
  title: string;
  description: string;
  duration_days: number;
  session_assignment: TSessionAssignment;
  timestamp_created: string;
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

export type TMyStudyAssignmentResponse = ICommonMetaResponse<TMyStudyAssignmentItem>;

export type TPayloadRequest = {
  files: File[] | null;
  filesToDelete?: string[] | string | null;
};

export type TMyStudyAssignmentSubmissionPayload = {
  subjectID:string;
  batchID:string;
  req: TPayloadRequest;
};

export type TAssigmentParams = {
  subjectID?:string;
  batchID?:string;
}
