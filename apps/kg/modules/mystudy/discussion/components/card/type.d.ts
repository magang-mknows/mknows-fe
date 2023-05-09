import { StaticImageData } from 'next/image';

export type cardAuthor = {
  title: string;
  avatar: StaticImageData;
  time: string;
  content: string;
  author: string;
  role: string;
  styleCard?: string;
  children?: React.ReactNode;
};
