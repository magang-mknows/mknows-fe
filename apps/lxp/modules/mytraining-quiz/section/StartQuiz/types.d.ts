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
  answers: Answer[];
}

export type IAnswer = {
  id: string;
  answer: string;
};

export type TQuizQuestionResponse = TMetaResponseSingle<IQuizItem>;