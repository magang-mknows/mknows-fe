import { TQuizSubmitPayload } from "../../type";

export type CountdownTimerProps = {
  targetHours: number;
};

export type CountdownTimerReturn = {
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

export type TRemainingTimeProps = {
  expiryTimestamp: number;
  prevPath: string;
  quizTakeId: string;
  payload: TQuizSubmitPayload;
};
