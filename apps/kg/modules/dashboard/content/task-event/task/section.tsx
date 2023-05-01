import { FC, ReactElement } from 'react';

import penugasan from '../../../assets/penugasan.svg';
import acara from '../../../assets/acara.svg';
import emptyTask from '../../../assets/emptyTask.svg';

import { MdNavigateNext } from 'react-icons/md';
import { AiFillWarning } from 'react-icons/ai';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useSelectedTask } from './hooks';

export const TaskSection: FC = (): ReactElement => {
  const { setSelectedTask, getSelectedTask } = useSelectedTask();

  const dummyPenugasan = [
    {
      id: 1,
      image: penugasan,
      topic: 'Japanese Culture',
      title: 'Introduction to Japanese Culture',
      milstone: 'Tugas Pertemuan 1',
      teacher: 'Bagas Saputra, M. Kom.',
      dueDate: 'Terakhir 28 Februari 2023',
    },
    {
      id: 2,
      image: acara,
      topic: 'Indonesia Culture',
      title: 'Introduction to Indonesia Culture',
      milstone: 'Tugas Pertemuan 2',
      teacher: 'Bagas Saputra, M. Kom.',
      dueDate: 'Terakhir 28 April 2023',
    },
    {
      id: 3,
      image: penugasan,
      topic: 'Bekasi Culture',
      title: 'Introduction to Bekasi Culture',
      milstone: 'Tugas Pertemuan 1',
      teacher: 'Bagas Saputra, M. Kom.',
      dueDate: 'Terakhir 28 Maret 2023',
    },
  ];
  return (
    <div className="bg-white p-7 rounded-md shadow-sm w-full overflow-hidden">
      {/* <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyPenugasan.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  getSelectedTask == item.id
                    ? "w-6 bg-primary-500 dark:bg-[#17A2B8] "
                    : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedTask(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section> */}
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        swipeable={true}
        className="w-full content-carousel"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <span
              className={`${
                isSelected ? 'bg-primary-500 w-6' : 'w-2 bg-neutral-300'
              } flex flex-row  h-2 rounded-full transition-all ease-in-out duration-300`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {dummyPenugasan.map((item, index) => {
          return (
            // <div className="bg-primary-500/10 flex items-center justify-center dark:bg-[#1B1E21] p-7 rounded-md shadow-sm w-full">
            //   <section className="flex flex-col items-center">
            //     <div className="">
            //       <Image src={emptyTask} alt="emptyTask" />
            //     </div>
            //     <h1 className="text-sm text-neutral-800 dark:text-white/80 font-medium -mt-5">
            //       Belum ada penugasan
            //     </h1>
            //   </section>
            // </div>
            <div key={index} className="">
              <section className="text-neutral-900 mb-4 flex flex-col w-full">
                <h1 className="text-lg font-bold w-fit">Penugasan</h1>
                <p className="text-sm text-neutral-500 w-fit">{item.topic}</p>
              </section>
              <section className="flex gap-4 mb-4 h-fit">
                <div className="w-[90px] h-[110px]">
                  <Image src={item.image} alt="test" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="mb-2 text-start">{item.title}</h1>
                  <section className="flex gap-2 items-start lg:items-center mb-2">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                      <MdNavigateNext className="text-primary-500" />
                    </div>
                    <p className="text-xs lg:text-sm text-neutral-400">
                      {item.milstone}
                    </p>
                  </section>
                  <section className="flex gap-2 items-start lg:items-centers">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                      <MdNavigateNext className="text-primary-500" />
                    </div>
                    <p className="text-xs lg:text-sm text-neutral-400">
                      {item.teacher}
                    </p>
                  </section>
                </div>
              </section>
              <section className="flex flex-col md:flex-row justify-between gap-4 items-center">
                <button className="text-white w-[95%] lg:w-44 mx-auto md:mx-0  mb-2  bg-primary-500 text-xs lg:text-sm py-3 px-4 rounded-md hover:bg-primary-600 transition-colors ease-in-out duration-300">
                  Kerjakan Sekarang
                </button>
                <div
                  style={{ color: 'red' }}
                  className="text-red-500 lg:justify-end flex items-center gap-2 text-xs lg:text-sm w-52"
                >
                  <AiFillWarning />
                  <h1 className="text-sm">{item.dueDate}</h1>
                </div>
              </section>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
