import { FC, ReactElement } from 'react';
import { DetailCard } from '../../../common/components/detail-card';
import { TQuizHistoryItem } from '../../types';

export const HistoryCard: FC<{ dataQuizHistory: TQuizHistoryItem }> = ({
  dataQuizHistory,
}): ReactElement => {
  function changeFormatByDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('id-ID', options);
  }
  function changeFormatByTime(iso: string): string {
    const time = new Date(iso);

    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    const second = String(time.getSeconds()).padStart(2, '0');

    return `${hour}:${minute}:${second}`;
  }
  function changeFormatByMinutes(second: number): string {
    const minutes: number = Math.floor(second / 60);
    const remainingSeconds: number = second % 60;

    return `${minutes} Menit ${remainingSeconds} Detik`;
  }

  const dateFormatted: string = changeFormatByDate(
    dataQuizHistory.timestamp_taken
  );
  const timeFormatted: string = changeFormatByTime(
    dataQuizHistory.timestamp_taken
  );
  const minutesFormatted: string = changeFormatByMinutes(
    dataQuizHistory.time_elapsed
  );

  return (
    <section className="bg-white shadow-sm rounded-md px-5 py-4 w-full">
      <section className="flex justify-between text-xs">
        <div className="flex flex-col md:flex-row md:gap-x-1 font-bold">
          <h1>Percobaan</h1>
          <p>Pertama</p>
        </div>
        <div>
          <p className="mb-1">{dateFormatted}</p>
          <p className="lg:text-end">{timeFormatted}</p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between lg:gap-x-2 my-6">
        <div className="flex flex-col w-full lg:w-28 py-9 mb-2 lg:mb-0 items-center justify-center rounded-md">
          <h1 className="text-3xl font-bold">{dataQuizHistory.score}</h1>
          <p>
            {dataQuizHistory.status === 'FINISHED' ? 'Lulus' : 'Tidak Lulus'}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
          <DetailCard type="trueAnswer" value={dataQuizHistory.correct} />
          <DetailCard type="timeFinished" value={minutesFormatted} />
          <DetailCard type="falseAnswer" value={dataQuizHistory.wrong} />
          <DetailCard
            type="totalQuestions"
            value={dataQuizHistory.total_question}
          />
        </div>
      </section>
    </section>
  );
};
