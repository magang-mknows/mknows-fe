import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TQuizTakeItem = {
  type: string;
  duration: number;
  questions_answers: Array<TQuizQuestionsAnswers>;
};

export type TQuizQuestionsAnswers = {
  id: string;
  question: string;
  answers: Array<{
    id: string;
    answer: string;
  }>;
};

export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;

export type TQuizRequestSubmit = {
  question: string;
  answer: string;
  help?: boolean;
};

export type TQuestionsAnswersPayloadItem = {
  question: string;
  answer: string;
};

export type TQuizSubmitPayload = {
  questions_answers: TQuestionsAnswersPayloadItem[];
};

export type TQuizSubmitItem = {
  right: number;
  wrong: number;
  total_question: number;
  remaining_attempt: number;
  time_elapsed: number;
  score: number;
};

export type TQuizSubmitResponse = TMetaResponseSingle<TQuizSubmitItem>;

export type TQuestion = {
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};

export type TuseQuizQuestion = {
  setQuestionsData: (val: Array<TQuizQuestionsAnswers>) => void;
  getQuestionsData: Array<TQuizQuestionsAnswers>;
};

export type TuseQuizRequestSubmit = {
  setQuizRequestSubmit: (val: Array<TQuizRequestSubmit>) => void;
  getQuizRequestSubmit: Array<TQuizRequestSubmit>;
};

export type TuseCurrentQuizNumber = {
  setCurrNumber: (val: number) => void;
  getCurrNumber: number;
};
