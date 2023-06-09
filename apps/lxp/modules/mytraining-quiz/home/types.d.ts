import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export interface TQuizBySesionItem {
  quiz: TQuizSessionItem;
  countQuiz: number;
  result: TQuizDescriptionItem;
}

export type TQuizSessionItem = {
  id: string;
  type: string;
  duration_sec: number;
  subject_session_id: string;
};

export type TQuizDescriptionItem = {
  total_questions: number;
  kkm: number;
  duration: number;
  remaining_attempt: number;
  score_per_point: string;
};

export type TQuizBySessionParams = {
  subjectID: string;
  batchID: string;
};

export type TQuizBySessionResponse = TMetaResponseSingle<TQuizBySesionItem>;
