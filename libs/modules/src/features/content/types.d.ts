import { StaticImageData } from "next/image";

export type TFeaturesList = {
  title: string;
  desc: string;
  isAvailable: boolean;
  link: string;
  srcImg: string | StaticImageData;
};
