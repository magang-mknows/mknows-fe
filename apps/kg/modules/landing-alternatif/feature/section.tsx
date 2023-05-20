import { FC, ReactElement } from 'react';
import {
  FeatureIcon1,
  FeatureIcon2,
  FeatureIcon3,
  FeatureIcon4,
  FeatureIcon5,
} from './icons';

export const FeatureAlternatif: FC = (): ReactElement => {
  const _feature = [
    {
      title: 'Instruktur Profesional',
      icon: <FeatureIcon1 />,
    },
    {
      title: 'Perencanaan Studi & Karir',
      icon: <FeatureIcon2 />,
    },
    {
      title: 'Sertifikasi Online',
      icon: <FeatureIcon3 />,
    },
    {
      title: 'Penyaluran Kerja',
      icon: <FeatureIcon4 />,
    },
    {
      title: '6000+ Peserta',
      icon: <FeatureIcon5 />,
    },
  ];
  return (
    <section className="flex z-10 p-6 w-full items-center md:h-[140px] md:px-[90px] justify-between bg-white">
      <div className="md:flex grid grid-cols-3 gap-6 md:gap-x-4 items-center justify-center w-full">
        {_feature.map((feat, key) => (
          <div
            className="grid grid-rows-2 justify-center items-center gap-x-4"
            key={key}
          >
            <div className="flex justify-center">{feat.icon}</div>
            <span className="text-[16px] text-center font-semibold text-black w-[10] px-4">
              {feat.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
