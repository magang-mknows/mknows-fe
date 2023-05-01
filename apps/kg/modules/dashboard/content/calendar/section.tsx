import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { Montserrat } from 'next/font/google';
import { useRecoilState } from 'recoil';

import { selectedDate, months, days } from './store';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

const MyCalendarSection: FC = (): ReactElement => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const numDaysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({ length: numDaysInMonth }, (_, i) => {
    const date = new Date(year, month - 1, i + 1);
    return { date };
  });

  const [selectDate, setSelectDate] = useRecoilState(selectedDate);

  return (
    <section
      className={`${montserrat.className} w-full text-neutral-900 dark:bg-[#1B1E21]  bg-white h-fit px-7 py-12 rounded-md`}
    >
      <header className="flex justify-between  items-center">
        <h1 className="text-lg font-bold text-neutral-900 dark:text-white">
          Kalender Saya
        </h1>
        <Link
          passHref
          href={'/'}
          className="text-primary-500 text-sm font-bold hover:underline hover:underline-offset-2 hover:text-blue-600 transition-colors ease-in-out duration-300"
        >
          Lihat Detail
        </Link>
      </header>
      <p className="mb-4 font-bold text-base text-yellow-600">
        {months[month - 1]}
      </p>
      <section className="flex justify-center items-center">
        <div className="mb-4 gap-2  w-full overflow-hidden overflow-x-scroll scrollbar-hide md:scrollbar-default  flex ">
          {dates.map(({ date }, index) => {
            return (
              <section
                onClick={() => setSelectDate(date)}
                key={index}
                className={`${
                  date.getDate() == selectDate.getDate()
                    ? 'bg-primary-500 text-white'
                    : ''
                } text-sm text-center cursor-pointer border-2 border-yellow-50/0  hover:border-yellow-500 group px-3 py-3 transition-colors ease-in-out duration-300 rounded-md w-fit`}
              >
                <p
                  className={`${
                    date.getDate() === selectDate.getDate()
                      ? 'text-white'
                      : 'text-neutral-500'
                  }   text-xs`}
                >
                  {days[date.getDay()].substring(0, 2)}
                </p>
                <p
                  className={`${
                    date.getDate() === selectDate.getDate()
                      ? 'text-white'
                      : 'text-neutral-500 dark:text-white'
                  }  text-neutral-800 font-bold`}
                >
                  {index + 1}
                </p>
              </section>
            );
          })}
        </div>
      </section>
      <section className="text-sm">
        <div className="border-l-4  cursor-pointer hover:border-primary-700 transition-all ease-in-out duration-500 group py-3 hover:shadow-lg border-primary-500 px-3 rounded-md mb-4">
          <p className="mb-1 text-neutral-800 dark:text-white text-xs md:text-sm">
            14:30 - 15:30 pm
          </p>
          <p className="font-bold  dark:text-white text-neutral-800 text-xs md:text-sm">
            Introduction to Japanese Culture
          </p>
          <p className="text-neutral-500 text-xs md:text-sm">Pertemuan 1</p>
        </div>
        <div className="border-l-4  cursor-pointer hover:border-yellow-700 transition-all ease-in-out duration-300 group py-3 hover:shadow-lg border-yellow-500 px-3 rounded-md mb-4">
          <p className="mb-1 text-neutral-800 dark:text-white text-xs md:text-sm">
            14:30 - 15:30 pm
          </p>
          <p className="font-bold dark:text-white text-neutral-800 text-xs md:text-sm ">
            Introduction to Japanese Culture
          </p>
          <p className="text-neutral-500 text-xs md:text-sm">Pertemuan 1</p>
        </div>
      </section>
    </section>
  );
};

export default MyCalendarSection;
