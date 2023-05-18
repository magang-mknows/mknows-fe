import { FC, Fragment, ReactElement } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { TrainingInformationTable } from './table';
import { LSubjectHeader, TrainingInformationHeader } from './header';
import { useGetSubjetByDeptId } from './hook';
import { useRouter } from 'next/router';

export const TrainingInformationContent: FC = (): ReactElement => {
  const router = useRouter();
  const { id_pelatihan } = router.query;
  const { data: subject, isLoading } = useGetSubjetByDeptId(
    id_pelatihan as string
  );

  const subjectData = subject?.data;

  return (
    <Fragment>
      {isLoading ? (
        <LSubjectHeader />
      ) : (
        <TrainingInformationHeader
          name={subjectData?.name as string}
          batch={1}
          category={subjectData?.category}
          point={subjectData?.point}
        />
      )}
      <main className="px-8 md:px-14 lg:px-16  ">
        <section className="flex px-6 mb-6 flex-wrap bg-secondary-blue-200/50 py-3 rounded-md shadow-sm gap-2 items-center">
          <AiFillInfoCircle className="text-xl text-[#0C2432]" />
          <h1 className="text-sm md:text-base text-[#0C2432]">
            klik mengajukan untuk mengambil seluruh pelatihan pada batch ini.
          </h1>
        </section>
        <TrainingInformationTable
          subjectData={subjectData?.subject_department as []}
        />
      </main>
    </Fragment>
  );
};
