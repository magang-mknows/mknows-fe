import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TQuizReviewAnswer = {
  answer: string;
  is_correct: boolean;
  is_selected: boolean;
};

export type TQuizReviewItem = {
  question: string;
  answers: TQuizReviewAnswer[];
  is_correct_item?: boolean;
};

export type TQuizReviewPayload = {
  attemptId: string;
};

export type TQuizReviewResponse = TMetaResponse<TQuizReviewItem>;

export type TuseQuizReviewQuestionsAnswers = {
  getQuizReviewQuestionsAnswers: Array<TQuizReviewItem>;
  setQuizReviewQuestionsAnswers: (val: Array<TQuizReviewItem>) => void;
};
