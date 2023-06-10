import { TMetaErrorResponse, TMetaResponseSingle } from "@mknows-frontend-services/utils";
type TGetQuizParams = {
  quizId: string;
  batchId: string;
};

export type TStoreQuestionAnswer = { answer?: string; question?: string; doubt?: boolean };

export interface IQuizItem {
  type: string;
  questions_answers: QuestionsAnswer[];
  duration: number;
}

export interface IQuestionsAnswer {
  id: string;
  question: string;
  answers: TAnswers[];
}

export type TAnswer = {
  id: string;
  answer: string;
};

export type TQuizQuestionResponse = TMetaResponseSingle<IQuizItem>;

export type TQuestionsAnswer = {
  questions_answers: {
    question?: string;
    answer?: string;
  }[];
};

export interface ISubmitQuizVariable {
  quizAnswer: TQuestionsAnswer;
  quizParams: TGetQuizParams;
}

export type TSubmitQuizItem = {
  right: number;
  wrong: number;
  total_question: number;
  remaining_attempt: number;
  time_elapsed: number;
  score: number;
  status: string;
};

export type TSubmitQuizResponse = TMetaErrorResponse<TSubmitQuizItem>;
