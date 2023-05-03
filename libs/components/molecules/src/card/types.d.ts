import { MouseEventHandler } from 'react';

export interface TCardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage: boolean;
  href?: string;
  imgStyle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
