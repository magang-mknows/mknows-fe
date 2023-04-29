import { FC, Fragment, ReactElement, useState } from 'react';
import NextImage from 'next/image';
import { TNavbarProps, TPopUpProps } from '../../types';
import { Button } from '@mknows-frontend-services/components/atoms';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

const PopUpMenu: FC<TPopUpProps> = ({ items, listStyle }): ReactElement => {
  return (
    <motion.section
      initial={{ opacity: '20%', top: 30 }}
      animate={{ opacity: '100%', top: 50 }}
      exit={{ opacity: '100%', top: 100 }}
      className="flex flex-col font-bold gap-y-3 w-auto bg-white absolute top-10 rounded-lg left-12 shadow-lg p-4"
    >
      {items.map((item, key) => (
        <span key={key} onClick={item.onClick} className={listStyle}>
          {item.name}
        </span>
      ))}
    </motion.section>
  );
};

export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  ...props
}): ReactElement => {
  const { data: session } = useSession();
  const [getPopUp, setPopUp] = useState(false);
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
        {!session ? (
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
            <div
              onClick={() => setPopUp(!getPopUp)}
              className="flex bg-neutral-200 w-[36px] h-[36px] rounded-lg flex text-neutral-600 items-center justify-center font-[700]"
            >
              MS
            </div>
            {getPopUp && <PopUpMenu {...props} />}
          </div>
        )}
      </nav>
    </header>
  );
};
