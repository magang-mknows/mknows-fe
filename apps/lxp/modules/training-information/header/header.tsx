import { Button } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement } from 'react';
import { IoMdAdd } from 'react-icons/io';

export const TrainingInformationHeader: FC = (): ReactElement => {
  return (
    <header className="px-8 pb-6 pt-10 md:px-14 lg:px-16 mb-8">
      <h1 className="text-xl text-neutral-800 font-bold mb-6">
        Pengajuan Pelatihan
      </h1>
      <section className="flex flex-wrap gap-y-2 justify-between items-end">
        <main>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">
              Tema Pelatihan
            </span>
            <span>:</span>
            <span> Pelatihan Keterampilan Interpersonal</span>
          </h1>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">Batch</span>
            <span>:</span>
            <span> 1 (Satu)</span>
          </h1>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">Total Poin</span>
            <span>:</span>
            <span> 144 Poin</span>
          </h1>
        </main>
        <aside>
          <Button
            type="button"
            className="!bg-[#3EB449] px-6 !border-none hover:!bg-[#319a3b] disabled:bg-version2-200/70 disabled:border-none  text-neutral-100  hover:border-version2-300 text-sm py-2 w-[180px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
          >
            <IoMdAdd />
            <h1>Mengajukan</h1>
          </Button>
        </aside>
      </section>
    </header>
  );
};
