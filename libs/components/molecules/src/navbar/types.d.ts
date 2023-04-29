import { TBottomNavProps, TPopUpProps } from './section';
import { MouseEventHandler, ReactNode } from 'react';

type TNavbarItem = {
  name: string;
  link: string;
};

export type TPopUpProps = {
  listStyle?: string;
  items: Array<{
    name: string;
    onClick: MouseEventHandler<HTMLSpanElement>;
  }>;
};

export type TNavbarProps = {
  navItems?: Array<TNavbarItem>;
  navItemStyle?: string;
  logo: string;
  logoStyle?: string;
  showBottomNav?: boolean;
  button?: ReactNode;
  avatar?: string;
} & TPopUpProps &
  TBottomNavProps;
