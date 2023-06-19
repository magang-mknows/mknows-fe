import { TQuizSubmitPayloadReq } from "../../../type";

export type TQuizSubmitPopup = {
  quizTakeId: string;
  status: boolean;
  prevPath: string;
  payloadReq: TQuizSubmitPayloadReq;
};
