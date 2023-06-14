export type TDashboardResponse = {
  code: number;
  status: string;
  message: string;
  data: TDashboardItems;
};

export type TDashboardItems = {
  dataUser: TUserItem;
  points: TPointItem;
  dataEvents: unknown[];
  dataAssignments: TDataAssignmentItem[];
  dataMyWork: TDataMyWorkItem[];
  dataCalendar: TDataCalendarItem[];
};

export type TUserItem = {
  full_name: string;
  id: string;
  active_subject_counts: string;
  all_subject_counts: string;
  certificate_counts: string;
};

export type TPointItem = {
  employee_id: string;
  points: number;
};

export type TDataAssignmentItem = {
  deadline: string;
  session: TSessionItem;
  subject_session_progress: TSubjectSessionProgressItem;
};

export type TSessionItem = {
  id: string;
  subject_id: string;
  session_number: number;
};

export type TSubjectSessionProgressItem = {
  id: string;
  department_id: string;
  name: string;
  thumbnail: string;
  subject_department: TSubjectDepartmentItem;
  subject_batch: TSubjectBatchItem[];
};

export type TSubjectDepartmentItem = {
  name: string;
};

export type TSubjectBatchItem = {
  id: string;
  teacher_batch: TTeacherBatchItem;
};

export type TTeacherBatchItem = {
  full_name: string;
};

export type TDataMyWorkItem = {
  subject_code: string;
  name: string;
  session_total_number: number;
  subject_id: string;
  progress: number;
  last_session: number;
  teacherName: string;
  batch_id: string;
  batch: number;
  credit: number;
  thumbnail: string;
  department_name: string;
};

export type TDataCalendarItem = {
  type: string;
  startAt: string;
  endAt: string;
  summary: string;
  place: string;
  speaker: string;
  allDay: boolean;
};
