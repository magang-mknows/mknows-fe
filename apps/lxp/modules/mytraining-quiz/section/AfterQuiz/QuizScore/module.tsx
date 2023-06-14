import { FC, ReactElement } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import DetailCard from "./DetailCard";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../../const";

import { ClientProvider } from "../../../../common/provider";

ChartJS.register(ArcElement, Tooltip, Legend);

export const QuizScore: FC = (): ReactElement => {
  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#9de6f5c3", "#E5E5E5"],
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
    cutout: 140,
  };

  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <div className="px-6 md:px-8 lg:px-16 xl:px-40 py-14 w-full flex flex-col  min-h-screen">
        <section className="bg-primary-600-500 w-full py-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center justify-center">
          <div className="w-full h-64 relative flex items-center justify-center">
            <div className="absolute   rounded-full border-8 border-neutral-200/70 ">
              <Doughnut data={data} options={options} className="p-4" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-neutral-900 dark:text-white/90 font-black">90</h1>
              <p className="text-xl text-neutral-800 dark:text-white/80">Point</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 ">
            <DetailCard type="correct" value={9} />
            <DetailCard type="wrong" value={0} />
            <DetailCard type="time_elapsed" value={2} />
            <DetailCard type="total_question" value={10} />
          </div>
        </section>
        <section className=" w-full flex justify-center gap-y-5 lg:justify-end mt-10 flex-wrap lg:flex-nowrap gap-x-5 ">
          <div className="w-full lg:w-80 ">
            <button
              type="button"
              className="text-version2-400  border-2  border-vetext-version2-400 bg-white  hover:bg-neutral-50 w-full   h-12 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
            >
              Riwayat Quiz
            </button>
          </div>
          <div className="w-full lg:w-80 ">
            <button className="bg-version2-400 text-white hover:bg-primary-600    w-full   h-12 rounded-md shadow-sm font-bold  transition-colors ease-out duration-300">
              Coba Kembali (Sisa 2)
            </button>
          </div>
        </section>
      </div>
    </ClientProvider>
  );
};
