import { StaticImageData } from "next/image";

export interface AssigmentProps {
  titleAssigment?: string;
  category?: string;
  date?: string;
  time?: string;
  titleCourse?: string;
  bgLine?: string;
  classNameCategory?: string;
  imgAssigment?: StaticImageData;
  alt?: string;
}

export type CrumbItem = {
  link: string;
  name: string;
};

export type BreadCrumbProps = {
  items: CrumbItem[];
};
