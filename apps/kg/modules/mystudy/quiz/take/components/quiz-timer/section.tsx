import { useAutoSaveQuizAnswer } from '../../hooks';
import { useCountdownTimer } from './hooks';
import { FC, ReactElement, useEffect } from 'react';
import InfoIcon from '../../../assets/info.svg';
import Image from 'next/image';
import { TRemainingTimeProps } from './types';
import { useTimerByGlobalState } from '../static-timer/hooks';
import { useRouter } from 'next/router';

export const QuizTimer: FC<TRemainingTimeProps> = ({
  expiryTimestamp,
  prevPath,
  quizTakeId,
  payload,
}): ReactElement => {
  const router = useRouter();
  const { hours, minutes, seconds, isComplete } = useCountdownTimer({
    targetHours: expiryTimestamp,
  });
  const { setTimerByGlobalState } = useTimerByGlobalState();
  const { resetStoredAnswer } = useAutoSaveQuizAnswer();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isComplete) {
      intervalId = setInterval(() => {
        setTimerByGlobalState({
          hours,
          minutes,
          seconds,
          isComplete: minutes + seconds === '0000' ? true : false,
        });
      }, 200);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [hours, seconds, minutes, isComplete, setTimerByGlobalState]);

  useEffect(() => {
    if (isComplete) {
      resetStoredAnswer();
      router.push(`${prevPath}/skor/${quizTakeId}`);
    }
  }, [isComplete, resetStoredAnswer]);

  return (
    <div className="bg-[#FEDBD7] rounded-md shadow-sm">
      <p className="flex items-center gap-x-2 w-fit p-3 text-[#EE2D24] text-base font-normal">
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
