import { FC, ReactElement } from "react";
import DetailCard from "../QuizScore/DetailCard";
import { useRouter } from "next/router";
import { TQuizHistoryParams } from "./types";
import { useGetQuizHistory } from "./hook";
import { formatTime } from "@mknows-frontend-services/utils";

export const HistoryCard: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: TQuizHistoryParams = {
    quizId: query.quizID as string,
    batchId: query.batchID as string,
  };
  const { data: quizHistory } = useGetQuizHistory(params);
  const quizHistoryData = quizHistory?.data;

  return (
    <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-16 py-10 w-full">
      {quizHistoryData?.map((item, index) => {
        const { formatedDate, formatedTime } = formatTime(item.timestamp_taken as string);

        return (
          <section className="bg-neutral-50 shadow-sm rounded-md px-5 py-4 w-full" key={index}>
            <section className="flex justify-between text-sm">
              <div className="flex flex-col md:flex-row md:gap-x-1 font-bold">
                <h1>Percobaan</h1>
                <p>{index + 1 === 1 ? "Pertama" : index + 1 === 2 ? "Kedua" : "Ketiga"}</p>
              </div>
              <div>
                <p className="mb-1">{formatedDate}</p>
                <p className="lg:text-end text-xs">{formatedTime}</p>
              </div>
            </section>
            <section className="lg:flex lg:gap-x-2 my-6">
              <div className="flex flex-col w-full dark:border-none lg:w-28 py-9 mb-2 lg:mb-0  border-2 border-neutral-100  items-center justify-center rounded-md min-w-[140px] ">
                <h1 className="text-2xl font-bold mb-2">{item?.score}</h1>
                <p className="text-sm">{item.status === "FAILED" ? "Gagal" : "Lulus"} </p>
              </div>
              <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2  w-full">
                <DetailCard type="correct" value={item?.correct as number} />
                <DetailCard type="time_elapsed" value={item?.time_elapsed as number} />
                <DetailCard type="wrong" value={item?.wrong as number} />
                <DetailCard type="total_question" value={item?.total_question as number} />
              </div>
            </section>
          </section>
        );
      })}
    </section>
  );
};
