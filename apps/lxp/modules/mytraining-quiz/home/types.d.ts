import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export interface TQuizBySesionItem {
  quiz: TQuizSessionItem;
  countQuiz: number;
}

export type TQuizSessionItem = {
  id: string;
  type: string;
  duration_sec: number;
  subject_session_id: string;
};

export type TQuizBySessionParams = {
  subjectID: string;
  batchID: string;
};

export type TQuizBySessionResponse = TMetaResponseSingle<TQuizBySesionItem>;
