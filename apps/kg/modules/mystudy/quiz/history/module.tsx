import { FC, ReactElement } from 'react';
import { HistoryCard } from './components/history-card';
import { useGetQuizHistoryById } from './hooks';
import { useRouter } from 'next/router';
import { TQuizHistoryItem } from './types';

export const QuizHistoryModule: FC = (): ReactElement => {
  const router = useRouter();
  const { data } = useGetQuizHistoryById(router.query.quizHistoryId as string);

  // const dataQuizHistories = data?.data as TQuizHistoryItem[];
  const dataQuizHistories: TQuizHistoryItem[] = [
    {
      id: '26b6416f-d4aa-4da3-a332-0cc9fe687772',
      timestamp_taken: '2023-05-24T17:39:30.048Z',
      score: 80,
      correct: 8,
      wrong: 2,
      status: 'FINISHED',
      total_question: 10,
      time_elapsed: 360,
    },
    {
      id: '102470198018905818290818',
      timestamp_taken: '2023-05-29T17:46:07.048Z',
      score: 50,
      correct: 5,
      wrong: 5,
      status: 'IN PROGRESS',
      total_question: 10,
      time_elapsed: 3600,
    },
    {
      id: '519075097190506901',
      timestamp_taken: '2023-05-30T17:12:49.048Z',
      score: 70,
      correct: 7,
      wrong: 3,
      status: 'FINISHED',
      total_question: 10,
      time_elapsed: 180,
    },
  ];

  return (
    <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {dataQuizHistories.map((historyData) => (
          <HistoryCard dataQuizHistory={historyData} />
        ))}
      </section>
    </div>
  );
};
