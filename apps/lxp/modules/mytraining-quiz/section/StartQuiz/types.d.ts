import { TMetaResponseSingle } from "@mknows-frontend-services/utils";
type TGetQuizParams = {
  quizId: string;
  batchId: string;
};

export type TStoreQuestionAnswer = { ans_id?: string; ques_id?: string; doubt?: boolean };

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

export interface IQuizAnswerPayload {
  questions_answers: QuestionsAnswer[];
}

export type TQuestionsAnswer = {
  question: string;
  answer: string;
};
