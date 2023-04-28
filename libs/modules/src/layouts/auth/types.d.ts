import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type TAuthLayoutProps = {
  title?: string;
  children: ReactNode;
  description?: string;
  linkText?: string;
  to?: string;
  img?: string | StaticImageData;
};
