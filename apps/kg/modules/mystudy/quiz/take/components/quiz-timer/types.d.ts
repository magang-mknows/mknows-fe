import { TQuizSubmitPayload } from "../../type";

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
  payload: TQuizSubmitPayload;
  setTimerProps?: Dispatch<SetStateAction<TCurrentTimerProp>>;
};
