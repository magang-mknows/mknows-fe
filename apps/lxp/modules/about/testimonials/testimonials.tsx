import Image from 'next/image';
import { FC, Fragment, ReactElement } from 'react';

import person1 from '../assets/person1.svg';
import person2 from '../assets/person2.svg';

export const TestimonialsSection: FC = (): ReactElement => {
  const dummyTestimonials = [
    {
      name: 'Andini',
      position: 'CEO of Mandiri Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person1,
    },
    {
      name: 'Syarief',
      position: 'Marketing of BNI Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person2,
    },
    {
      name: 'Andini',
      position: 'CEO of Mandiri Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person1,
    },
    {
      name: 'Syarief',
      position: 'Marketing of BNI Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person2,
    },
    {
      name: 'Andini',
      position: 'CEO of Mandiri Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person1,
    },
    {
      name: 'Syarief',
      position: 'Marketing of BNI Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person2,
    },
    {
      name: 'Andini',
      position: 'CEO of Mandiri Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person1,
    },
    {
      name: 'Syarief',
      position: 'Marketing of BNI Syariah',
      desc: 'M-Knows Consulting mampu melakukan pengerjaan proyek dengan sangat baik. Pengerjaan yang profesional dan cepat membuat perusahaan saya puas dengan kinerja M-Knows Consulting. Terima kasih M-Knows Consulting.',
      srcImg: person2,
    },
  ];

  return (
    <Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-8 mb-5 lg:mb-10 ">
        <h1 className="px-8 md:px-14 lg:px-16 text-neutral-900 py-20 h-full text-3xl md:text-4xl font-bold text-left">
          We Are Strong In “
          <span className="text-version3-500">Activity Based Learning</span>”
        </h1>
      </div>
      <section className="mb-4 md:mb-8 lg:mb-10 w-full pb-4 -mt-10  px-8 md:px-14 lg:px-16 ">
        <section className=" flex gap-10 gap-y-20 w-[100%] overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] overflow-x-scroll">
          {dummyTestimonials.map((testimoni, index) => {
            return (
              <section className="py-14" key={index}>
                <div
                  className={`${
                    (index + 1) % 2 !== 0
                      ? 'bg-version2-400'
                      : ' bg-version2-500'
                  } rounded-md h-[360px] lg:min-h-[380px] w-[340px] flex-shrink-0 shadow-md`}
                >
                  <div className="flex justify-center relative -top-14 ">
                    <span className={`h-32 w-32 rounded-full relative  block`}>
                      <Image
                        src={testimoni.srcImg as unknown as string}
                        alt="article-view"
                        className="bg-neautral-50 w-full mb-3"
                        height={30}
                        width={30}
                        loading="eager"
                      />
                    </span>
                  </div>
                  <section className="-mt-14 text-center mb-8">
                    <h1 className="text-neutral-100 font-medium text-base">
                      {testimoni.name}
                    </h1>
                    <p className="text-neutral-200/90 text-sm">
                      {testimoni.position}
                    </p>
                  </section>
                  <section className="text-sm text-neutral-100 px-8 text-justify leading-6">
                    <p>{testimoni.desc}</p>
                  </section>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </Fragment>
  );
};
