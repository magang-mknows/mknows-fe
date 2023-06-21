import { CardCS } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement } from "react";

const dummy = [
  {
    icon: "/assets/chart-quota/asset1.svg",
    title: "Total Perusahaan",
    desc: "500",
    classButton: "bg-secondary-100 hover:bg-secondary-100 bg-opacity-20 text-secondary-500",
  },
  {
    icon: "/assets/chart-quota/asset2.svg",
    title: "Total Alokasi Kuota",
    desc: "270.000.000",
    classButton: "bg-primary-100 hover:bg-primary-100 bg-opacity-20 text-primary-500",
  },
  {
    icon: "/assets/chart-quota/asset3.svg",
    title: "Total Lokasi Biaya",
    desc: "500.000.000",
    classButton: "bg-purple-100 hover:bg-purple-100 bg-opacity-20 text-purple-500",
  },
];

const ChartQuotaModules: FC = (): ReactElement => {
  return (
    <section className="grid grid-cols-3 gap-8 mx-4">
      {dummy.map((x, i) => (
        <CardCS
          key={i}
          hasButton={true}
          buttonText="Lihat Semua"
          buttonHref="/list-company"
          buttonClassName={`flex mb-2 py-2 justify-center rounded-md font-bold  items-end my-2 ${x.classButton} w-full shadow-lg `}
          className="w-full m-3 min-h-[171px] absolute shadow-md px-4"
        >
          <div className="flex flex-row w-full h-full space-x-[10px] py-4">
            <img src={x.icon} alt="icon" />

            <div className="flex-col w-full justify-center space-y-1">
              <p className="text-[14px] font-semibold text-neutral-600">{x.title}</p>
              <p className="text-black text-[28px]">500</p>
            </div>
          </div>
        </CardCS>
      ))}
    </section>
  );
};

export default ChartQuotaModules;
