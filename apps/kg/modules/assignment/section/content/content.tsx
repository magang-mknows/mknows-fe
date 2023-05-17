import { FC, ReactElement, useState } from 'react';
import { Assigment } from '../../component/assignment-card';
import AssigmentAssigned from '../../assets/assigned-assigment.svg';
import AssigmentDone from '../../assets/assigned-done.svg';
import AssignedAssesment from '../../assets/assigned-assesment.svg';
import AssignedLate from '../../assets/assigned-late.svg';
import ImageNull from '../../assets/data-null.svg';
import Image from 'next/image';
import { T } from './types';
import { useAssigment } from './hooks';
import { useGetAssignment } from '../../hooks';

type TAssignmentProps = {
  session_id: string;
};

export const ContentSection: FC<TAssignmentProps> = ({
  session_id,
}): ReactElement => {
  const { data } = useGetAssignment(session_id);
  console.log('cek assignmnet', data);

  const [active, setactive] = useState('semua-tugas');
  const { getAssigment } = useAssigment();
  console.log(getAssigment.length);
  return (
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
                    active == 'ditugaskan'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-[#0B568D] `}
                  aria-current="page"
                  onClick={() => setactive('ditugaskan')}
                >
                  Ditugaskan
                </a>
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
                  className={`inline-block p-4 ${
                    active == 'terlambat'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                  aria-current="page"
                  onClick={() => setactive('terlambat')}
                >
                  Terlambat
                </a>
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
                  className={`inline-block p-4 ${
                    active == 'sedang-dinilai'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D] `}
                  aria-current="page"
                  onClick={() => setactive('sedang-dinilai')}
                >
                  Sedang Dinilai
                </a>
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
                  className={`inline-block p-4 ${
                    active == 'selesai'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]`}
                  aria-current="page"
                  onClick={() => setactive('selesai')}
                >
                  Selesai
                </a>
              </button>
            </li>
          </ul>
        </div>
        <div className=" pb-8 ">
          {active === 'semua-tugas' ? (
            getAssigment.map((item: T) => (
              <Assigment
                key={item.id}
                titleAssigment={item.title}
                category={item.category}
                titleCourse={item.course}
                date={item.date}
                time={item.time}
                bgLine={
                  item.category === 'ditugaskan'
                    ? 'bg-[#0B568D]'
                    : item.category === 'terlambat'
                    ? 'bg-[#D79210]'
                    : item.category === 'selesai'
                    ? 'bg-[#2D9A41]'
                    : item.category === 'sedang-dinilai'
                    ? 'bg-[#737373]'
                    : ''
                }
                classNameCategory={
                  item.category === 'ditugaskan'
                    ? 'text-[#0B568D]'
                    : item.category === 'terlambat'
                    ? 'text-[#D79210]'
                    : item.category === 'selesai'
                    ? 'text-[#2D9A41]'
                    : item.category === 'sedang-dinilai'
                    ? 'text-[#737373]'
                    : ''
                }
                imgAssigment={
                  item.category === 'ditugaskan'
                    ? AssigmentAssigned
                    : item.category === 'terlambat'
                    ? AssignedLate
                    : item.category === 'selesai'
                    ? AssigmentDone
                    : item.category === 'sedang-dinilai'
                    ? AssignedAssesment
                    : ''
                }
              />
            ))
          ) : getAssigment.filter((item: T) => item.category.includes(active))
              .length == 0 ? (
            <div className="flex justify-center">
              <Image src={ImageNull} alt={'empty'} />
            </div>
          ) : (
            getAssigment
              .filter((item: T) => item.category.includes(active))
              .map((item: T) => (
                <Assigment
                  key={item.id}
                  titleAssigment={item.title}
                  category={item.category}
                  titleCourse={item.course}
                  date={item.date}
                  time={'20:00:00'}
                  bgLine={
                    item.category === 'ditugaskan'
                      ? 'bg-[#0B568D]'
                      : item.category === 'terlambat'
                      ? 'bg-[#D79210]'
                      : item.category === 'selesai'
                      ? 'bg-[#2D9A41]'
                      : item.category === 'sedang-dinilai'
                      ? 'bg-[#737373]'
                      : ''
                  }
                  classNameCategory={
                    item.category === 'ditugaskan'
                      ? 'text-[#0B568D]'
                      : item.category === 'terlambat'
                      ? 'text-[#D79210]'
                      : item.category === 'selesai'
                      ? 'text-[#2D9A41]'
                      : item.category === 'sedang-dinilai'
                      ? 'text-[#737373]'
                      : ''
                  }
                  imgAssigment={
                    item.category === 'ditugaskan'
                      ? AssigmentAssigned
                      : item.category === 'terlambat'
                      ? AssignedLate
                      : item.category === 'selesai'
                      ? AssigmentDone
                      : item.category === 'sedang-dinilai'
                      ? AssignedAssesment
                      : ''
                  }
                />
              ))
          )}
        </div>
      </div>
    </section>
  );
};
