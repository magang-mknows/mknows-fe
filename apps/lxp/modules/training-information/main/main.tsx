import React, { FC, ReactElement } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { TrainingInformationTable } from './table';

export const TrainingInformationMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16  ">
      {/* <TrainingInformationAlert /> */}
      <section className="flex px-6 mb-6 flex-wrap bg-secondary-blue-200/50 py-3 rounded-md shadow-sm gap-2 items-center">
        <AiFillInfoCircle className="text-xl text-[#0C2432]" />
        <h1 className="text-sm md:text-base text-[#0C2432]">
          klik mengajukan untuk mengambil seluruh pelatihan pada batch ini.
        </h1>
      </section>
      <TrainingInformationTable />
    </main>
  );
};
