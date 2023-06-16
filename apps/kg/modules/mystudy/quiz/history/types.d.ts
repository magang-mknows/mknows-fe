import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TQuizHistoryData = {
  id: string;
  timestamp_taken: string;
  score: number;
  correct: number;
  wrong: number;
  status: string;
  total_question: number;
  time_elapsed: number;
};

export type TQuizHistoryItem = {
  history_data: TQuizHistoryData[];
  remaining_attempt: number | string;
};

export type TQuizHistoryResponse = TMetaResponseSingle<TQuizHistoryItem>;
