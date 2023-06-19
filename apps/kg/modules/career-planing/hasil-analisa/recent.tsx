import { DoughnutChart } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";

export const AnalyticRecent: FC = (): ReactElement => {
  function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 150, 180, 300);
    gradient.addColorStop(0, "#16D3FD");
    gradient.addColorStop(1, "#FDB415");
    return gradient;
  }
  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: (context: any) => {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          const color = value === 78 ? createGradient(context.chart.ctx) : "#E5E5E5";
          return color;
        },
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: 78,
    cutout: 90,
  };

  return (
    <div className="w-full bg-white text-center px-5 py-5 rounded-[8px] ">
      <div className=" flex items-center justify-center shadow-md p-5">
        <DoughnutChart data={data} option={options} />
        <h1 className="absolute text-2xl font-bold">{80.4}%</h1>
      </div>
    </div>
  );
};
