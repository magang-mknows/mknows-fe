import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { TBottomNavProps } from './types';

export const BottomNav: FC<TBottomNavProps> = ({
  bottomNavItemStyle,
  bottomNavItems,
}): ReactElement => {
  return (
    <nav className="flex items-center border-t-[1px] border-neutral-200 px-[75px] bg-white py-[20px]">
      {bottomNavItems.map((nav, key) => (
        <Link href={nav.link} key={key} className={bottomNavItemStyle}>
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};
