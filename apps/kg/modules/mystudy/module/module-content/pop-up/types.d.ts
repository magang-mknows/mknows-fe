import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

type TModuleResumeItem = {
  student_id: string;
  subject_id: string;
  status: string;
  type: string;
  score: string;
  is_late: string;
  timestamp_taken: string;
  timestamp_submitted: string;
};

type TModuleResumePayloadReq = {
  module_answer: string;
};

export type TModuleResumePayload = {
  id: number | string;
  req: TModuleResumePayloadReq;
};

export type TModuleResumeResponse = TMetaResponseSingle<TModuleResumeItem>;
