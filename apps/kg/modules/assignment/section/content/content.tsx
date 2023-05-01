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

export const ContentSection: FC = (): ReactElement => {
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
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white  `}
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
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-white `}
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
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white  `}
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
                      ? 'text-[#0B568D] border-[#ffff] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white `}
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
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white`}
                  aria-current="page"
                  onClick={() => setactive('selesai')}
                >
                  Selesai
                </a>
              </button>
            </li>
          </ul>
        </div>
        <div className=" pb-8">
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
                    ? 'bg-primary-600'
                    : item.category === 'terlambat'
                    ? 'bg-secondary-yellow-600'
                    : item.category === 'selesai'
                    ? 'bg-secondary-green-500'
                    : item.category === 'sedang-dinilai'
                    ? 'bg-neautral-500'
                    : ''
                }
                classNameCategory={
                  item.category === 'ditugaskan'
                    ? 'text-primary-600'
                    : item.category === 'terlambat'
                    ? 'text-secondary-yellow-600'
                    : item.category === 'selesai'
                    ? 'text-secondary-green-500'
                    : item.category === 'sedang-dinilai'
                    ? 'text-neautral-500'
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
                      ? 'bg-primary-600'
                      : item.category === 'terlambat'
                      ? 'bg-secondary-yellow-600'
                      : item.category === 'selesai'
                      ? 'bg-secondary-green-500'
                      : item.category === 'sedang-dinilai'
                      ? 'bg-neautral-500'
                      : ''
                  }
                  classNameCategory={
                    item.category === 'ditugaskan'
                      ? 'text-primary-600'
                      : item.category === 'terlambat'
                      ? 'text-secondary-yellow-600'
                      : item.category === 'selesai'
                      ? 'text-secondary-green-500'
                      : item.category === 'sedang-dinilai'
                      ? 'text-neautral-500'
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
