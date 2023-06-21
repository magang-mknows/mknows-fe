import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TDashboardItem = {
  profile: TDashboardProfile;
  leaderboard: TDashboardLeaderboard[];
  events: TDashboardEvent[];
  articles: TDashboardArticle[];
  assignments: TDashboardAssignment[];
  calendar: TDashboardCalendar[];
  subject_progress: TDashboardSubjectProgress;
};

export type TDashboardProfile = {
  avatar: any;
  poin: number;
  user_name: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  semester: number;
  ipk: string;
  major: string;
  role: string;
  total_certificates: number;
  current_subjects: number;
  finished_subjects: number;
};

export type TDashboardLeaderboard = {
  student_id: string;
  author: TDashboardAuthor;
};

export type TDashboardAuthor = {
  avatar?: string;
  poin: number;
  user_name: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  semester: number;
  ipk: string;
  major: string;
  role: string;
  total_certificates: number;
  current_subjects: number;
  finished_subjects: number;
};

export type TDashboardEvent = {
  id: string;
  name: string;
  registration_close_date: string;
  date_start: string;
  date_end: string;
  description: string;
  capacity: number;
  thumbnail: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
  event_studentEvent: TDashboardEventStudentEvent[];
};

export type TDashboardEventStudentEvent = {
  id: string;
  student_id: string;
  event_id: string;
  status: string;
};

export type TDashboardArticle = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  created_at: string;
  author: TDashboardAuthor2;
  category: string;
  tags: string[];
  is_favorite: boolean;
};

export type TDashboardAuthor2 = {
  full_name: string;
};

export type TDashboardAssignment = {
  assignment_id: string;
  assignment_session_id: string;
  assignment_title: string;
  assignment_desc: string;
  progress_status: string;
  progress_type: string;
  progress_timestamp_submitted: string;
  progress_deadline: string;
};

export type TDashboardCalendar = {
  ref_id: string;
  type: string;
  startAt: string;
  endAt: string;
  summary: string;
  place: string;
  speaker?: string | null;
  allDay: boolean;
};

export type TDashboardSubjectProgress = {
  dataMajor: TDashboardDataMajor;
  dataSubjects: TDashboardDataSubject[];
};

export type TDashboardDataMajor = {
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

export type TDashboardDataSubject = {
  id: string;
  subject_code: string;
  name: string;
  thumbnail: string;
  teacher_name: string;
  credit: number;
  subject_semester: number;
  current_session: number;
  session_count: number;
  progress_percentage: number;
};

export type TDashboardResponse = TMetaResponseSingle<TDashboardItem>;

export type TuseDashboardData = {
  getDashboardData: TDashboardItem | null;
  setDashboardData: (val: TDashboardItem) => void;
};
