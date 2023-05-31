import { TMetaResponse } from '@mknows-frontend-services/utils';

type TQuizReviewAnswer = {
  answer: string;
  is_correct: boolean;
  is_selected: boolean;
};

export type TQuizReviewItem = {
  question: string;
  answers: TQuizReviewAnswer[];
};

export type TQuizReviewResponse = TMetaResponse<TQuizReviewItem>;

export type TuseQuizReviewQuestionsAnswers = {
  getQuizReviewQuestionsAnswers: Array<TQuizReviewItem>;
  setQuizReviewQuestionsAnswers: (val: Array<TQuizReviewItem>) => void;
};
