import { FC, Fragment, ReactElement } from 'react';
import NextImage from 'next/image';
import { TNavbarProps } from '../../types';
import { Button } from '@mknows-frontend-services/components/atoms';
import { useSession } from 'next-auth/react';

const PopUpMenu: FC = (): ReactElement => {
  return (
    <section className="flex bg-white absolute top-10 rounded-lg left-12 shadow-lg p-4">
      <span>Logout</span>
    </section>
  );
};

export const TopNav: FC<TNavbarProps> = ({ logo, logoStyle }): ReactElement => {
  const { data: session } = useSession();
  return (
    <header className="flex w-full justify-between px-[72px] py-[17px] bg-white">
      <figure className="flex items-center">
        <NextImage
          src={logo}
          alt="logo navbar"
          loading="eager"
          width={40}
          height={40}
          className={logoStyle}
          quality={75}
        />
      </figure>
      <nav className="flex items-center gap-x-6">
        <div className="flex bg-neutral-200 w-[36px] h-[36px] rounded-lg"></div>
        <div className="flex bg-neutral-200 w-[36px] h-[36px] rounded-lg"></div>
        {session ? (
          <Fragment>
            <Button
              type="button"
              className="w-auto h-auto px-4 py-1.5 rounded-lg border-primary-base border-2 text-primary-base font-[700]"
            >
              Masuk
            </Button>
            <Button
              type="button"
              className="w-auto h-auto px-4 py-2 rounded-lg bg-primary-500 text-white font-[700]"
            >
              Daftar
            </Button>
          </Fragment>
        ) : (
          <div className="flex items-center gap-x-4 relative">
            <div className="flex bg-neutral-200 w-[36px] h-[36px] rounded-lg"></div>
            <div className="flex bg-neutral-200 w-[36px] h-[36px] rounded-lg flex text-neutral-600 items-center justify-center font-[700]">
              MS
            </div>
            <PopUpMenu />
          </div>
        )}
      </nav>
    </header>
  );
};
