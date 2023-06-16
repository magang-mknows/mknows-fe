import { useAutoSaveQuizAnswer, useSubmitQuiz } from "../../hooks";
import { useCountdownTimer } from "./hooks";
import { FC, ReactElement, useEffect } from "react";
import InfoIcon from "../../../assets/info.svg";
import Image from "next/image";
import { TRemainingTimeProps } from "./types";
import { useTimerByGlobalState } from "../static-timer/hooks";
import { useRouter } from "next/router";
import { TQuizSubmitPayload } from "../../type";

export const QuizTimer: FC<TRemainingTimeProps> = ({
  expiryTimestamp,
  prevPath,
  quizTakeId,
  payloadReq,
}): ReactElement => {
  const router = useRouter();
  const { setTimerByGlobalState } = useTimerByGlobalState();
  const { resetStoredAnswer } = useAutoSaveQuizAnswer();
  const { mutate } = useSubmitQuiz();
  const { hours, minutes, seconds, isComplete } = useCountdownTimer({
    targetHours: expiryTimestamp,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isComplete) {
      intervalId = setInterval(() => {
        setTimerByGlobalState({
          hours,
          minutes,
          seconds,
          isComplete: minutes + seconds === "0000" ? true : false,
        });
      }, 200);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [hours, seconds, minutes, isComplete, setTimerByGlobalState]);

  const payload: TQuizSubmitPayload = {
    id: quizTakeId,
    req: payloadReq,
  };

  useEffect(() => {
    if (isComplete) {
      mutate(payload);
      resetStoredAnswer();
      router.push(`${prevPath}/nilai/${quizTakeId}`);
    }
  }, [isComplete, resetStoredAnswer, prevPath, quizTakeId, router, payload]);

  return (
    <div className="bg-error-100 rounded-md shadow-sm">
      <p className="flex items-center gap-x-2 w-fit p-3 text-warning-500 text-base font-normal">
        {!isComplete ? (
          <>
            <Image src={InfoIcon} alt="Timer Icon" className="w-5 h-5" />
            <span>Sisa waktu:</span>
            <span>
              {hours}:{minutes}:{seconds}
            </span>
          </>
        ) : (
          <span>Opps.. Waktu habis</span>
        )}
      </p>
    </div>
  );
};
