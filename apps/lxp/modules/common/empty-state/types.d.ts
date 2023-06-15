import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type TEmptyStateProps = {
  description: string;
  image?: StaticImageData | ReactNode | StaticImport | string;
  classname?: string;
  imageClass?: string;
};
