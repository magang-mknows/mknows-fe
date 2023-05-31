import { atom } from 'recoil';
import { TQuizReviewItem } from './types';

export const quizReviewQuestionAnswerState = atom<Array<TQuizReviewItem>>({
  key: 'quiz-review-questions-answers',
  default: [],
});

export const currentQuizReviewNumberState = atom({
  key: 'current-quiz-number-state',
  default: 1,
});
