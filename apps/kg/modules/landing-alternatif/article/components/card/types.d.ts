import { StaticImageData } from 'next/image';

export type TChoiceFacultyCardProps = {
  title: string;
  date?: string;
  tag: string;
  views?: string;
  src: string | StaticImageData;
};
