import { TQuizSubmitPayload } from '../../../type';

export type TQuizSubmitPopup = {
  quizTakeId: string;
  status: boolean;
  prevPath: string;
  payload: TQuizSubmitPayload;
};
