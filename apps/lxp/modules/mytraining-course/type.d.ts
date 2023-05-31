import { ICommonMetaResponse } from "../../service/types";

export type TDepartmentItems = {
  name: string;
  description: string;
  point: number;
  thumbnail: string;
  id: string;
  companyName: string;
};
export type TFinalProgressSubject = {
  subject_code: string;
  name: string;
  slug: string;
  thumbnail: string;
  progress: number;
  credit: number;
  session_total_number: number;
  teacherName: string;
  subject_id: string;
  last_session: string;
  batch_id: string;
};
export type params = {
  subjectID: string;
  lastSession: string;
  batchID: string;
};

export type TDepartmentResponse = ICommonMetaResponse<TDepartmentItems>;
