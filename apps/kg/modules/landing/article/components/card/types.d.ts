import { StaticImageData } from "next/image";

export type TArticleCardProps = {
  title: string;
  tag: string;
  src: string | StaticImageData;
  desc?: string;
};
