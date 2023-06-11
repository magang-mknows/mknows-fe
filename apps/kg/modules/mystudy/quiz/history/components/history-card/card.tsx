import { FC, ReactElement } from "react";
import { DetailCard } from "../../../common/components/detail-card";
import { TQuizHistoryData } from "../../types";
import Link from "next/link";

export const HistoryCard: FC<{
  dataQuizHistory: TQuizHistoryData;
  quizPath: string;
  key: number;
}> = ({ dataQuizHistory, quizPath, key }): ReactElement => {
  function changeFormatByDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }
  function changeFormatByTime(iso: string): string {
    const time = new Date(iso);

    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");

    return `${hour}:${minute}:${second}`;
  }
  function changeFormatByMinutes(second: number): string {
    const minutes: number = Math.floor(second / 60);
    const remainingSeconds: number = second % 60;

    return `${minutes} Menit ${remainingSeconds} Detik`;
  }

  const dateFormatted: string = changeFormatByDate(dataQuizHistory.timestamp_taken);
  const timeFormatted: string = changeFormatByTime(dataQuizHistory.timestamp_taken);
  const minutesFormatted: string = changeFormatByMinutes(dataQuizHistory.time_elapsed);

  const quizReviewLink = `${quizPath}/review/${dataQuizHistory.id}`;

  return (
    <section key={key} className="bg-white shadow-sm rounded-md px-5 py-4 w-full">
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
      <section className="flex flex-col sm:flex-row justify-between items-center lg:gap-x-2 mt-3">
        <Link
          href={quizReviewLink}
          className="flex flex-col w-full h-auto lg:w-28 py-2 lg:py-0 mb-2 lg:mb-0 items-center justify-center rounded-md hover:bg-neutral-200/80 transition-colors ease-in duration-300"
        >
          <button>
            <h1 className="text-3xl font-bold">{dataQuizHistory.score}</h1>
            <p>{dataQuizHistory.status === "FINISHED" ? "Lulus" : "Tidak Lulus"}</p>
          </button>
        </Link>
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
          <DetailCard type="trueAnswer" value={dataQuizHistory.correct} link={quizReviewLink} />
          <DetailCard type="timeFinished" value={minutesFormatted} link={quizReviewLink} />
          <DetailCard type="falseAnswer" value={dataQuizHistory.wrong} link={quizReviewLink} />
          <DetailCard
            type="totalQuestions"
            value={dataQuizHistory.total_question}
            link={quizReviewLink}
          />
        </div>
      </section>
    </section>
  );
};
