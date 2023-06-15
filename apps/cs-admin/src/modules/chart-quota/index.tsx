import { IconWarning } from "@mknows-frontend-services/components/atoms";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement } from "react";

const dummy = [
  {
    icon: "/assets/chart-quota/card1.svg",
    title: "Rotal Perusahaan",
    desc: "500",
    bgButton: "bg-purple-500",
  },
  {
    icon: "/assets/chart-quota/card2.svg",
    title: "Total Alokasi Kuota",
    desc: "270.000.000",
    bgButton: "bg-primary-500",
  },
  {
    icon: "/assets/chart-quota/card3.svg",
    title: "Total Lokasi Biaya",
    desc: "500.000.000",
    bgButton: "bg-secondary-500",
  },
];

const ChartQuotaModules: FC = (): ReactElement => {
  return (
    <CardCS
      hasButton={true}
      buttonText="Lihat Detail"
      buttonHref="/dashboard/request?tab=hasil"
      buttonClassName={`flex py-1 justify-center rounded-sm text-white items-end my-2 bg-primary-400 w-full`}
      className="w-full m-3 min-h-[135px] absolute shadow-md px-4"
    >
      <div className="flex flex-row w-full h-full space-x-[10px] py-4">
        <div>
          <IconWarning />
        </div>

        <div className="flex-col w-full space-y-1">
          <p className="text-sm font-semibold">Total Perusahaan</p>
          <p className="text-neutral-400 font-normal text-xs">500</p>
        </div>
      </div>
    </CardCS>
  );
};

export default ChartQuotaModules;
