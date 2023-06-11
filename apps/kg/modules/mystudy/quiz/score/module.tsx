import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DetailCard } from "../common/components/detail-card";
import Link from "next/link";
import { useRouter } from "next/router";
import { TQuizScoreItem } from "./types";
import { useGetQuizScoreById } from "./hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

export const QuizScoreModule: FC = (): ReactElement => {
  const router = useRouter();
  const quizPath = router.asPath.split("/").slice(0, -2).join("/");
  const { data: quizScoreData } = useGetQuizScoreById(router.query.quizScoreId as string);
  const dataQuizScores: TQuizScoreItem = quizScoreData?.data as TQuizScoreItem;

  function convertNumberToTens(num: number): number {
    const tens = (num / dataQuizScores?.total_question) * 100;
    return Math.round(tens);
  }
  function changeFormatByMinutes(second: number): string {
    const minutes: number = Math.floor(second / 60);
    const remainingSeconds: number = second % 60;

    return `${minutes} Menit ${remainingSeconds} Detik`;
  }

  const rightAnswer = convertNumberToTens(dataQuizScores?.right);
  const wrongAnswer = convertNumberToTens(dataQuizScores?.wrong);
  const timeElapsed = changeFormatByMinutes(dataQuizScores?.time_elapsed);

  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        data: [rightAnswer, wrongAnswer],
        backgroundColor: ["#106FA4", "#E5E5E5"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderRadius: 10,
      },
    },
    cutout: 150,
  };

  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-40 py-14 w-full flex flex-col  min-h-screen">
      <section className="bg-primary-600-500 w-full py-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center justify-center">
        <div className="w-full h-64 relative flex items-center justify-center">
          <div className="absolute rounded-full border-8 border-neutral-200/70">
            <Doughnut data={data} options={options} className="p-4" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-neutral-900 font-black">{rightAnswer}</h1>
            <p className="text-xl text-neutral-800">Point</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 ">
          <DetailCard type="trueAnswer" value={dataQuizScores?.right} />
          <DetailCard type="falseAnswer" value={dataQuizScores?.wrong} />
          <DetailCard type="timeFinished" value={timeElapsed} />
          <DetailCard type="totalQuestions" value={dataQuizScores?.total_question} />
        </div>
      </section>
      <section className=" w-full flex justify-center gap-y-5 lg:justify-end mt-10 flex-wrap lg:flex-nowrap gap-x-5 ">
        <div className="w-full lg:w-80 ">
          <Link href={`${quizPath}/riwayat/${router.query.quizScoreId}`}>
            <button
              type="button"
              className="text-primary-500 border-2 border-primary-500 bg-white hover:bg-neutral-50 w-full h-12 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
            >
              Riwayat Quiz
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-80 ">
          <Link href={quizPath}>
            <button
              type="button"
              className="bg-primary-500 border-2 border-primary-500 text-white hover:bg-primary-600  w-full h-12 rounded-md shadow-sm font-bold  transition-colors ease-out duration-300"
            >
              Coba Kembali (Sisa {dataQuizScores?.remaining_attempt})
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
