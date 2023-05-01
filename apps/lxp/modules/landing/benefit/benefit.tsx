import { FC, ReactElement } from 'react';

export const BenefitSection: FC = (): ReactElement => {
  const dummyBenefits = [
    {
      title: 'Online Learning',
      text: 'Mulailah meningkatkan pengetahuan dan kemampuan Anda melalui fitur online learning kami yang menawarkan pengalaman belajar yang interaktif dan menyenangkan.',
    },
    {
      title: 'E-Sertifikat',
      text: 'Dapatkan pengakuan resmi atas kemampuan dan pengetahuan Anda melalui fitur E-sertifikat kami yang memberikan sertifikat berkualitas tinggi dan dapat diakses kapan saja, di mana saja.',
    },
    {
      title: 'Gamifikasi',
      text: 'Fitur gamifikasi adalah sebuah strategi yang mengadaptasi elemen permainan ke dalam konteks non-permainan untuk meningkatkan motivasi, keterlibatan, dan kesenangan pengguna.',
    },
    {
      title: 'Konten Relevan',
      text: 'Pelajari topik yang Anda butuhkan dengan fitur konten yang relevan dari kami, menyediakan materi terkini dan terverifikasi untuk membantu Anda mencapai tujuan belajar Anda.',
    },
  ];

  return (
    <div className="px-8 md:px-14 lg:px-16 bg-neutral-100">
      <section className="px-8 md:px-14 lg:px-16 py-10 rounded-lg bg-version2-400 grid col-span-1 lg:grid-cols-3 gap-6 items-center">
        <h1 className="text-3xl lg:text-4xl text-neutral-50 font-bold  lg:leading-[44px]">
          Satu Aplikasi Untuk{' '}
          <span className="text-version2-500">Beragam Kebutuhan</span>
        </h1>
        <section className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 py-6 md:py-8 lg:py-10">
          {dummyBenefits.map(({ text, title }, index) => {
            return (
              <div className="text-neutral-50  h-fit" key={index}>
                <h1 className="mb-1 lg:mb-2 text-lg font-bold">{title}</h1>
                <p className="text-xs text-neutral-50/90">{text}</p>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
