import { FC, ReactElement } from 'react';

import penugasan from '../../../assets/penugasan.svg';
import acara from '../../../assets/acara.svg';
import Image from 'next/image';

import { MdNavigateNext } from 'react-icons/md';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useSelectedEvent } from './hooks';

export const EventSection: FC = (): ReactElement => {
  const { setSelectedEvent, getSelectedEvent } = useSelectedEvent();

  const dummyEvent = [
    {
      id: 1,
      image: acara,
      topic: 'Webinar Cyber Security',
      date: '27 Feb',
      time: '09.00 - 11.00 WIB',
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 2,
      image: penugasan,
      topic: 'Webinar Cyber Crime',
      date: '27 Feb',
      time: '09.00 - 11.00 WIB',
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 3,
      image: penugasan,
      topic: 'Webinar Mikrotik',
      date: '27 Feb',
      time: '09.00 - 11.00 WIB',
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
  ];
  return (
    <div className="bg-white p-7 rounded-md shadow-sm w-full flex overflow-hidden">
      {/* <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyEvent.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  getSelectedEvent == item.id
                    ? "w-6 bg-primary-500 dark:bg-[#17A2B8] "
                    : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedEvent(item.id);
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
                isSelected ? 'bg-yellow-500 w-6' : 'w-2 bg-neutral-300'
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
        {dummyEvent.map((item, index) => {
          return (
            <div key={index} className="">
              <section className="text-neutral-900 mb-4 flex flex-col w-full">
                <h1 className="text-lg font-bold text-neutral-900 w-fit">
                  Acara Kampus
                </h1>
                <p className="text-sm text-neutral-500 w-fit">
                  {dummyEvent.length} Acara kampus tersedia
                </p>
              </section>
              <section className="flex gap-4 mb-4">
                <div className="w-[90px] h-[110px]">
                  <Image src={item.image} alt="test" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="mb-2 text-neutral-900 text-start">
                    {item.topic}
                  </h1>
                  <section className="flex gap-2 xl:gap-4  flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col">
                      <section className="flex gap-2 items-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <MdNavigateNext className="text-yellow-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">
                          {item.date}
                        </p>
                      </section>
                      <section className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <MdNavigateNext className="text-yellow-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">
                          {item.totalSpeakers} Pemateri
                        </p>
                      </section>
                    </div>
                    <div className="flex flex-col ">
                      <section className="flex gap-2 items-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <MdNavigateNext className="text-yellow-500" />
                        </div>
                        <p className="text-xs lg:text-sm  text-neutral-400">
                          {item.time}
                        </p>
                      </section>
                      <section className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <MdNavigateNext className="text-yellow-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">
                          {item.audience} / {item.quota} Peserta
                        </p>
                      </section>
                    </div>
                  </section>
                </div>
              </section>
              <section className="flex justify-between items-center">
                <button className="text-white w-[95%] lg:w-44 bg-yellow-500 text-sm py-3 px-4 mx-auto md:mx-0 rounded-md hover:bg-yellow-600 transition-colors ease-in-out duration-300">
                  Daftar Sekarang
                </button>
              </section>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
