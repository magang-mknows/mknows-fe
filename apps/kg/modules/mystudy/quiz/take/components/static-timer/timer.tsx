import { FC, ReactElement } from 'react';
import InfoIcon from '../../../assets/info.svg';
import Image from 'next/image';
import { useTimerByGlobalState } from './hooks';
import { TQuizStaticTimerProps } from './types';

export const QuizStaticTimer: FC<TQuizStaticTimerProps> = ({
  isFromLocalStorage,
}): ReactElement => {
  const { getTimerByGlobalState } = useTimerByGlobalState();
  let hours = '',
    minutes = '',
    seconds = '',
    isComplete = false;
  if (!isFromLocalStorage) {
    hours = getTimerByGlobalState.hours;
    minutes = getTimerByGlobalState.minutes;
    seconds = getTimerByGlobalState.seconds;
    isComplete = getTimerByGlobalState.isComplete;
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
