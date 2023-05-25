import { StaticImageData } from "next/image";

export type TChoiceFacultyCardProps = {
  title: string;
  sks: string;
  tag: Array<string>;
  src: string | StaticImageData;
};
