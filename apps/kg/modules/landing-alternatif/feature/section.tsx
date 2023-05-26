import { FC, ReactElement } from "react";
import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4, FeatureIcon5 } from "./icons";

export const FeatureAlternatif: FC = (): ReactElement => {
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
      title: "Sertifikasi Online",
      icon: <FeatureIcon3 />,
    },
    {
      title: "Penyaluran Kerja",
      icon: <FeatureIcon4 />,
    },
    {
      title: "6000+ Peserta",
      icon: <FeatureIcon5 />,
    },
  ];
  return (
    <div className="flex gap-[95px] items-center justify-center lg:w-full w-screen py-8">
      {_feature.map((feat, key) => (
        <div
          className="flex flex-col gap-y-4 w-[160px] px-4  items-center py-4 shadow-2xl bg-neutral-100 rounded-xl"
          key={key}
        >
          <div className="flex pr-10">{feat.icon}</div>
          <span className="text-[16px] text-left px-4 font-semibold text-black">{feat.title}</span>
        </div>
      ))}
    </div>
  );
};
