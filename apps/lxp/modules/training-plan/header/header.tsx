import { FC, ReactElement } from 'react';

export const TrainingPlanHeader: FC = (): ReactElement => {
  return (
    <header className="w-full pb-6 pt-2 px-8 md:px-14 lg:px-16 flex items-center justify-center flex-col">
      <p className="text-lg text-neutral-500">Pelatihan</p>
      <h1 className="text-2xl text-version3-300 font-bold">
        Pilih Departement
      </h1>
    </header>
  );
};
