import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TQuizDescItem = {
  id: string;
  total_questions: number;
  kkm: number;
  duration: number;
  remaining_attempt: number;
};

export type TQuizDescResponse = TMetaResponseSingle<TQuizDescItem>;
