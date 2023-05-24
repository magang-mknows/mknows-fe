import { FC, ReactElement, Suspense, useState } from 'react';
import { Assigment } from '../../component/assignment-card';
import AssigmentAssigned from '../../assets/assigned-assigment.svg';
import AssigmentDone from '../../assets/assigned-done.svg';
import AssignedAssesment from '../../assets/assigned-assesment.svg';
import AssignedLate from '../../assets/assigned-late.svg';
import ImageNull from '../../assets/data-null.svg';
import Image from 'next/image';
import { useGetAssignment } from '../../hooks';
import { TAssignmentUser } from '../../types';
import { LoadingSpinner } from '@mknows-frontend-services/components/atoms';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorAssignment } from './error';

export const ContentSection: FC = (): ReactElement => {
  const { data } = useGetAssignment();
  const getAss = data?.data;
  const [active, setactive] = useState('semua-tugas');

  return (
    <ErrorBoundary fallback={<ErrorAssignment />}>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen">
          <div className="bg-white h-full rounded-[8px] dark:bg-gray-800 ">
            <div className="text-[20px] font-semibold text-center text-[#262626] border-b border-gray-200 hover:text-[#000] px-[50px] mb-10">
              <ul className="flex flex-wrap ">
                <li className="mr-2">
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == 'semua-tugas'
                          ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                          : ''
                      }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                      aria-current="page"
                      onClick={() => setactive('semua-tugas')}
                    >
                      Semua Tugas
                    </a>
                  </button>
                </li>
                <li className="mr-2">
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == 'ONGOING'
                          ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                          : ''
                      }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-[#0B568D] `}
                      aria-current="page"
                      onClick={() => setactive('ONGOING')}
                    >
                      Ditugaskan
                    </a>
                  </button>
                </li>
                <li className="mr-2">
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == 'LATE'
                          ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                          : ''
                      }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                      aria-current="page"
                      onClick={() => setactive('LATE')}
                    >
                      Terlambat
                    </a>
                  </button>
                </li>
                <li className="mr-2">
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == 'GRADING'
                          ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                          : ''
                      }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D] `}
                      aria-current="page"
                      onClick={() => setactive('GRADING')}
                    >
                      Sedang Dinilai
                    </a>
                  </button>
                </li>
                <li className="mr-2">
                  <button>
                    <a
                      className={`inline-block p-4 ${
                        active == 'FINISHED'
                          ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                          : ''
                      }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]`}
                      aria-current="page"
                      onClick={() => setactive('FINISHED')}
                    >
                      Selesai
                    </a>
                  </button>
                </li>
              </ul>
            </div>
            <div className=" pb-8 ">
              {active === 'semua-tugas' ? (
                getAss?.map((item: TAssignmentUser) => (
                  <Assigment
                    key={item.assignment_id}
                    titleAssigment={item.assignment_title}
                    category={
                      item.progress_status === 'ONGOING'
                        ? 'Ditugaskan'
                        : item.progress_status === 'LATE'
                        ? 'Terlambat'
                        : item.progress_status === 'FINISHED'
                        ? 'Selesai'
                        : item.progress_status === 'GRADING'
                        ? 'Sedang Dinilai'
                        : ''
                    }
                    titleCourse={item.assignment_desc}
                    date={item.progress_deadline}
                    time={item.progress_deadline}
                    bgLine={
                      item.progress_status === 'ONGOING'
                        ? 'bg-[#0B568D]'
                        : item.progress_status === 'LATE'
                        ? 'bg-[#D79210]'
                        : item.progress_status === 'FINISHED'
                        ? 'bg-[#2D9A41]'
                        : item.progress_status === 'GRADING'
                        ? 'bg-[#737373]'
                        : ''
                    }
                    classNameCategory={
                      item.progress_status === 'ONGOING'
                        ? 'text-[#0B568D]'
                        : item.progress_status === 'LATE'
                        ? 'text-[#D79210]'
                        : item.progress_status === 'FINISHED'
                        ? 'text-[#2D9A41]'
                        : item.progress_status === 'GRADING'
                        ? 'text-[#737373]'
                        : ''
                    }
                    imgAssigment={
                      item.progress_status === 'ONGOING'
                        ? AssigmentAssigned
                        : item.progress_status === 'LATE'
                        ? AssignedLate
                        : item.progress_status === 'FINISHED'
                        ? AssigmentDone
                        : item.progress_status === 'GRADING'
                        ? AssignedAssesment
                        : ''
                    }
                  />
                ))
              ) : getAss?.filter((item) =>
                  item.progress_status.includes(active)
                ).length == undefined ? (
                <div className="flex justify-center">
                  <Image src={ImageNull} alt={'empty'} />
                </div>
              ) : (
                getAss
                  ?.filter((item) => item.progress_status.includes(active))
                  .map((item) => (
                    <Assigment
                      key={item.assignment_id}
                      titleAssigment={item.assignment_title}
                      category={
                        item.progress_status === 'ONGOING'
                          ? 'Ditugaskan'
                          : item.progress_status === 'LATE'
                          ? 'Terlambat'
                          : item.progress_status === 'FINISHED'
                          ? 'Selesai'
                          : item.progress_status === 'GRADING'
                          ? 'Sedang Dinilai'
                          : ''
                      }
                      titleCourse={item.assignment_desc}
                      date={item.progress_deadline}
                      time={item.progress_deadline}
                      bgLine={
                        item.progress_status === 'ONGOING'
                          ? 'bg-[#0B568D]'
                          : item.progress_status === 'LATE'
                          ? 'bg-[#D79210]'
                          : item.progress_status === 'FINISHED'
                          ? 'bg-[#2D9A41]'
                          : item.progress_status === 'GRADING'
                          ? 'bg-[#737373]'
                          : ''
                      }
                      classNameCategory={
                        item.progress_status === 'ONGOING'
                          ? 'text-[#0B568D]'
                          : item.progress_status === 'LATE'
                          ? 'text-[#D79210]'
                          : item.progress_status === 'FINISHED'
                          ? 'text-[#2D9A41]'
                          : item.progress_status === 'GRADING'
                          ? 'text-[#737373]'
                          : ''
                      }
                      imgAssigment={
                        item.progress_status === 'ONGOING'
                          ? AssigmentAssigned
                          : item.progress_status === 'LATE'
                          ? AssignedLate
                          : item.progress_status === 'FINISHED'
                          ? AssigmentDone
                          : item.progress_status === 'GRADING'
                          ? AssignedAssesment
                          : ''
                      }
                    />
                  ))
              )}
            </div>
          </div>
        </section>
      </Suspense>
    </ErrorBoundary>
  );
};
