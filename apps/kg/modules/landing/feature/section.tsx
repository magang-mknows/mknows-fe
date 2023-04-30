import { FC, Fragment, ReactElement } from 'react';
import {
  FeatureIcon1,
  FeatureIcon2,
  FeatureIcon3,
  FeatureIcon4,
  FeatureIcon5,
} from '../icons';

export const FeatureSection: FC = (): ReactElement => {
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
      title: 'Assetment Kompetensi',
      icon: <FeatureIcon3 />,
    },
    {
      title: 'Penyaluran Kerja',
      icon: <FeatureIcon4 />,
    },
    {
      title: '50.000 Peserta',
      icon: <FeatureIcon5 />,
    },
  ];
  return (
    <section className="flex z-10 w-full items-center h-[140px] px-[112px] justify-between bg-primary-500">
      <div className="flex gap-x-4 items-center w-full">
        {_feature.map((feat, key) => (
          <Fragment key={key}>
            <div className="flex items-center justify-center w-[70px] h-[58px] rounded-full bg-primary-base bg-opacity-70">
              {feat.icon}
            </div>
            <span className="text-[20px] text-white max-w-1/2">
              {feat.title}
            </span>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
