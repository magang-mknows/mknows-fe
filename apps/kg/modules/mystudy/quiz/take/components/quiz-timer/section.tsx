import { useCountdownTimer } from './hooks';
import { FC, ReactElement } from 'react';
type TRemainingTimeProps = {
  expiryTimestamp: number;
};

export const QuizTimer: FC<TRemainingTimeProps> = ({
  expiryTimestamp,
}): ReactElement => {
  const { hours, minutes, seconds, isComplete } = useCountdownTimer({
    targetHours: expiryTimestamp,
  });

  return (
    <div
      style={{ color: 'red' }}
      className="text-red-500 font-bold  rounded-md shadow-sm"
    >
      <p className="bg-red-100 w-fit px-2 py-1.5">
        {!isComplete ? (
          <>
            <span className="mr-2">Sisa waktu:</span>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </>
        ) : (
          <span className="mr-2">Opps.. Waktu habis</span>
        )}
      </p>
    </div>
  );
};
