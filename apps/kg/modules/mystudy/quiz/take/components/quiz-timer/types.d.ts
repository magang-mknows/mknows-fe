import { TQuizSubmitPayloadReq } from "../../type";

export type TCountdownTimerProps = {
  targetHours: number;
};

export type TCountdownTimerReturn = {
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

export type TRemainingTimeProps = {
  expiryTimestamp: number;
  prevPath: string;
  quizTakeId: string;
  payloadReq: TQuizSubmitPayloadReq;
  setTimerProps?: Dispatch<SetStateAction<TCurrentTimerProp>>;
};
