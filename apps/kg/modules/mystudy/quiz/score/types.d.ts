export type TQuizScoreItem = {
  right: number;
  wrong: number;
  total_question: number;
  remaining_attempt: number;
  time_elapsed: number;
  score: number;
  status: string;
};

export type TQuizScoreResponse = TMetaResponseSingle<TQuizScoreItem>;
