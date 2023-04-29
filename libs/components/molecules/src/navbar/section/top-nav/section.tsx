import { FC, ReactElement, useState } from 'react';
import NextImage from 'next/image';
import { TNavbarProps, TPopUpProps } from '../../types';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { IconFeature, IconRing } from '../icons';
import Image from 'next/image';

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
  button,
  avatar,
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
        <div className="flex bg-neutral-200 items-center flex justify-center w-[36px] h-[36px] rounded-lg">
          <IconFeature />
        </div>
        {!session ? (
          <div className="flex gap-x-4">{button}</div>
        ) : (
          <div className="flex items-center gap-x-6 relative">
            <div className="flex bg-neutral-200 items-center flex justify-center w-[36px] h-[36px] rounded-lg">
              <IconRing />
            </div>
            <Image
              src={avatar}
              alt={'user avatar'}
              width={26}
              height={26}
              onClick={() => setPopUp(!getPopUp)}
              className="bg-white rounded-lg flex text-neutral-600 items-center justify-center font-[700]"
            />
            {getPopUp && <PopUpMenu {...props} />}
          </div>
        )}
      </nav>
    </header>
  );
};
