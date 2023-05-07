export type CountdownTimerProps = {
  targetHours: number;
};

export type CountdownTimerReturn = {
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};
