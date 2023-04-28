import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { TNavbarProps } from '../../types';
import Link from 'next/link';
export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  navItems,
  navItemStyle,
}): ReactElement => {
  return (
    <header>
      <figure>
        <Image
          src={logo}
          alt="logo navbar"
          loading="eager"
          width={40}
          height={40}
          className={logoStyle}
          quality={75}
        />
      </figure>
      <nav>
        {navItems.map((nav, key) => (
          <Link key={key} className={navItemStyle} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
