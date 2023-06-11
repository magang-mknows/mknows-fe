import { FC, ReactElement } from "react";
import { HistoryCard } from "./components/history-card";
import { useRouter } from "next/router";
import { TQuizHistoryData } from "./types";
import Link from "next/link";
import { useGetQuizHistoryById } from "./hooks";

export const QuizHistoryModule: FC = (): ReactElement => {
  const router = useRouter();
  const quizPath = router.asPath.split("/").slice(0, -2).join("/");
  const { data } = useGetQuizHistoryById(router.query.quizHistoryId as string);
  const dataQuizHistories = data?.data.history_data as TQuizHistoryData[];

  return (
    <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {dataQuizHistories?.map((historyData, index) => (
          <HistoryCard key={index} dataQuizHistory={historyData} quizPath={quizPath} />
        ))}
      </section>
      <div className="w-full flex justify-center mt-9">
        <Link href={quizPath} className="w-full md:w-1/4 mx-auto">
          <button className="w-full bg-[#106FA4] py-4 rounded-lg text-base font-bold text-white">
            Coba Kembali (Sisa {data?.data.remaining_attempt})
          </button>
        </Link>
      </div>
    </div>
  );
};
