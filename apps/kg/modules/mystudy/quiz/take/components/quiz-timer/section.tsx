import { useRouter } from 'next/router';
import { useAutoSaveQuizAnswer } from '../../hooks';
import { useCountdownTimer } from './hooks';
import { FC, ReactElement } from 'react';
import InfoIcon from '../../../assets/info.svg';
import Image from 'next/image';
import { TRemainingTimeProps } from './types';

export const QuizTimer: FC<TRemainingTimeProps> = ({
  expiryTimestamp,
  prevPath,
  quizTakeId,
}): ReactElement => {
  const router = useRouter();
  const { hours, minutes, seconds, isComplete } = useCountdownTimer({
    targetHours: expiryTimestamp,
  });
  const { resetStoredAnswer } = useAutoSaveQuizAnswer();

  if (isComplete) {
    resetStoredAnswer();
    // router.push(`${prevPath}/${quizTakeId}`);
  }

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
