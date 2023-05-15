import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score: FC = (): ReactElement => {
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
    <div className="w-full h-64 relative flex items-center justify-center">
      <div className="absolute   rounded-full border-8 border-neutral-200/70 dark:border-[#9de6f5c3]/20">
        <Doughnut data={data} options={options} className="p-4" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-neutral-900 dark:text-white/90 font-black">90</h1>
        <p className="text-xl text-neutral-800 dark:text-white/80">Point</p>
      </div>
    </div>
  );
};

export default Score;
