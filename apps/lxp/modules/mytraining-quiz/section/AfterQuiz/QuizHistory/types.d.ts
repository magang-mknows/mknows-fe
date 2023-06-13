import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TQuizHistoryItems = {
  id?: string;
  timestamp_taken?: string;
  score?: number;
  correct?: number;
  status?: string;
  wrong?: number;
  total_question?: number;
  time_elapsed?: number;
};

export type TQuizHistoryResponse = TMetaResponse<TQuizHistoryItems>;

export type TQuizHistoryParams = {
  quizId: string;
  batchId: string;
};
