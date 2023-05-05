import { FC, ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import { TdetailInformation } from './types';
import { Button } from '@mknows-frontend-services/components/atoms';
import { showDetailTraining } from '../table';

const TrainingDetail: FC<TdetailInformation> = ({
  name,
  indicator,
  study_experience,
  basic_competencies,
  teaching_materials,
  tools_needed,
  session_total_number,
}): ReactElement => {
  const setShowDetail = useSetRecoilState(showDetailTraining);

  return (
    <section className="px-8 text-left md:px-14 py-8 bg-neutral-50 rounded-sm ">
      <header className="mb-4 ">
        <h1 className="text-base font-bold text-neutral-800">
          Kompetensi yang dikembangkan
        </h1>
        <p className="text-sm text-neutral-700">Mata Kuliah {name}</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <section className="bg-neutral-200 text-neutral-800 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">Kompetensi Dasar</h1>
          <p className="text-sm font-normal">{basic_competencies}</p>
        </section>
        <section className="bg-neutral-200 text-neutral-800 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">Indikator</h1>
          <p className="text-sm font-normal">{indicator}</p>
        </section>
        <section className="bg-neutral-200 text-neutral-800 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">Pengalaman Pembelajaran</h1>
          <p className="text-sm font-normal">{study_experience}</p>
        </section>
        <section className="bg-version2-400 text-neutral-50 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">Materi Ajar</h1>
          <p className="text-sm font-normal">{teaching_materials}</p>
        </section>
        <section className="bg-version2-400 text-neutral-50 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">Waktu</h1>
          <p className="text-sm font-normal">{session_total_number}</p>
        </section>
        <section className="bg-version2-400 text-neutral-50 px-10 py-4 rounded-md shadow-sm overflow-hidden">
          <h1 className="text-base font-bold mb-1">
            Alat, Bahan, Sumber Belajar
          </h1>
          <p className="text-sm font-normal">{tools_needed}</p>
        </section>
      </main>
      <section className="w-full flex justify-end py-6">
        <Button
          type="button"
          className="!text-version2-400 !border-version2-400 bg-neutral-50  hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 text-sm py-2 w-28 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2  flex items-center justify-center gap-2"
          onClick={() => {
            setShowDetail(false);
          }}
        >
          <h1>Kembali</h1>
        </Button>
      </section>
    </section>
  );
};

export default TrainingDetail;
