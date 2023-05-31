import { TMetaResponse } from '@mknows-frontend-services/utils';

export type TQuizHistoryItem = {
  id: string;
  timestamp_taken: string;
  score: number;
  correct: number;
  wrong: number;
  status: string;
  total_question: number;
  time_elapsed: number;
};

export type TQuizHistoryResponse = TMetaResponse<TQuizHistoryItem>;
