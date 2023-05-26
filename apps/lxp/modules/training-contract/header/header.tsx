import { FC, ReactElement } from "react";
import { IoAlertCircle } from "react-icons/io5";

export const TrainingContractHeader: FC = (): ReactElement => {
  return (
    <header className="px-8 md:px-14 mb-6 lg:px-16 pt-10">
      <h1 className="text-xl font-bold mb-4 w-full border-b-[1px] border-neutral-300 pb-4">
        Pelatihan Keterampilan Interpersonal
      </h1>
      <section className="flex gap-2 w-full items-center bg-secondary-blue-100/50 px-4 py-2 rounded-md shadow-sm">
        <IoAlertCircle className="text-xl text-secondary-blue-500" />
        <h1 className="text-sm text-secondary-blue-500">
          Pelatihan yang ditambahkan dapat dilihat pada tab{" "}
          <span className="font-bold">Draft Pelatihan</span>
        </h1>
      </section>
    </header>
  );
};
