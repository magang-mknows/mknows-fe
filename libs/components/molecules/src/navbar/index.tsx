import { FC, ReactElement } from 'react';
import { TNavbarProps } from './types';
import Link from 'next/link';
import Image from 'next/image';
export const Navbar: FC<TNavbarProps> = ({
  navItems,
  navItemStyle,
  logo,
  logoStyle,
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
          <Link className={navItemStyle} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
