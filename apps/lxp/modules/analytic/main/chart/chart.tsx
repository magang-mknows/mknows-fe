import { LineChart } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement } from 'react';

export const AnalyticChart: FC = (): ReactElement => {
  const labels = [
    'Batch 1',
    'Batch 2',
    'Batch 3',
    'Batch 4',
    'Batch 5',
    'Batch 6',
  ];
  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: 'IPK',
        data: [0.0, 2.5, 2.2, 3.8, 3.0, 3.0],
        borderColor: '#053d3812',
        tension: 0.1,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, '#053d38ef');
          gradient.addColorStop(1, '#053d3850');
          return gradient;
        },
        hoverBackgroundColor: '#A3CCAB4D',
        hoverBorderColor: '#A3CCAB4D',
        pointRadius: 6,
        pointHoverRadius: 20,
        pointStyle: 'circle',
        pointBackgroundColor: '#737373',
        borderWidth: 2,
      },
    ],
  };

  const optionsLine = {
    scales: {
      y: {
        max: 4.5,
        min: 0,
        ticks: {
          color: '#053D38A1',
          stepSize: 1,
          max: 4,
          callback: function (value: any) {
            if (value === 4.5) {
              return '';
            } else {
              return value;
            }
          },
        },
        border: {
          dash: [2, 4],
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          display: true,
        },
        border: {
          dash: [4, 4],
        },
        reverse: false,
      },
    },
    element: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'rgba(47, 97, 68, 1)',
        fill: true,
        backgroundColor: 'rgba(47, 97, 68, 0.3)',
      },
      point: {
        radius: 0,
        hintRadius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="col-span-3 lg:col-span-2 px-4 relative bg-neutral-100 ">
      <LineChart data={dataLine} option={optionsLine} />
    </div>
  );
};
