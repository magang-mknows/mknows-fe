import { FC, ReactElement } from "react";
import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4, FeatureIcon5 } from "../icons";

export const FeatureSection: FC = (): ReactElement => {
  const _feature = [
    {
      title: "Instruktur Profesional",
      icon: <FeatureIcon1 />,
    },
    {
      title: "Perencanaan Studi & Karir",
      icon: <FeatureIcon2 />,
    },
    {
      title: "Asesment Kompetensi",
      icon: <FeatureIcon3 />,
    },
    {
      title: "Penyaluran Kerja",
      icon: <FeatureIcon4 />,
    },
    {
      title: "50.000 Peserta",
      icon: <FeatureIcon5 />,
    },
  ];
  return (
    <section className="flex z-10 p-6 w-full items-center md:h-[140px] md:px-[90px] justify-between bg-primary-500">
      <div className="md:flex grid grid-cols-3 gap-6 md:gap-x-4 items-center justify-center w-full">
        {_feature.map((feat, key) => (
          <div
            className="flex-col flex md:flex-row gap-y-2 items-center justify-center gap-x-2 w-full"
            key={key}
          >
            {feat.icon}
            <span className="md:text-[18px] text-center md:text-left text-base text-white max-w-1/2">
              {feat.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
