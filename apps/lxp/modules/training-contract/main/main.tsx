import { FC, ReactElement } from 'react';
import { TrainingContractTab } from './training-tab/training-tab';

export const TrainingContractMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16">
      <div className="border-b-2 border-neutral-200 mb-6">
        <h1 className="text-version2-500 border-version2-500 border-b-2 w-fit font-bold text-sm pb-2 mr-4 transition-all ease-in-out duration-75">
          Kontrak Pelatihan
        </h1>
      </div>
      <TrainingContractTab />
    </main>
  );
};
