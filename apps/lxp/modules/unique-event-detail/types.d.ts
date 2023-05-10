export type TCardContentProps = {
  title?: string;
  subTitle?: string;
  desc?: string;
  srcImg?: string;
  icon?: ReactNode;
  isAvailable?: boolean;
  addtionalClass?: string;
  detailList?: Array<{ text: string; link?: string }>;
  list?: Array<string>;
  link?: string;
};

export type TEventCardProps = {
  isOrder: boolean;
};
