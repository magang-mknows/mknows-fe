import { FC, ReactElement, useState } from 'react';
import NextImage from 'next/image';
import { TNavbarProps, TPopUpAllFeaturesProps, TPopUpProps } from '../../types';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { IconFeature, IconRing } from '../icons';
import Image from 'next/image';
import { Button } from '@mknows-frontend-services/components/atoms';

const PopUpMenu: FC<TPopUpProps> = ({
  items,
  listStyle,
  userData,
}): ReactElement => {
  return (
    <motion.section
      initial={{ opacity: '20%', top: 30 }}
      animate={{ opacity: '100%', top: 50 }}
      exit={{ opacity: '100%', top: 100 }}
      className="flex flex-col font-bold gap-y-3 p-4 w-[318px] bg-white absolute top-[60px] rounded-lg right-[-20px] z-10 shadow-lg p-4"
    >
      <div className="flex gap-x-4 items-center">
        <Image
          src={userData.avatar}
          alt={'user avatar'}
          width={36}
          height={36}
          className="bg-white rounded-lg flex text-neutral-600 items-center justify-center font-[700]"
        />
        <div className="flex flex-col gap-y-2">
          <span className="text-[16px]">{userData.full_name}</span>
          <span className="text-[14px] text-neutral-base font-normal">
            {userData.email}
          </span>
        </div>
      </div>
      <hr className="w-full text-neutral-base" />
      {items.map((item, key) => (
        <div
          key={key}
          onClick={item.onClick}
          className={'flex items-center gap-x-3'}
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </motion.section>
  );
};

const PopUpAllFeature: FC<TPopUpAllFeaturesProps> = ({
  features,
}): ReactElement => {
  return (
    <motion.section
      initial={{ opacity: '20%', top: 30 }}
      animate={{ opacity: '100%', top: 50 }}
      exit={{ opacity: '100%', top: 100 }}
      className="flex flex-col font-bold gap-y-3 w-auto bg-white absolute top-10 rounded-lg right-[76px] shadow-lg p-4"
    >
      {features.map((item, key) => (
        <Button
          type="button"
          href={item.link}
          key={key}
          className={'flex flex-col gap-y-2'}
        >
          <span>{item.name}</span> {item.icon}
        </Button>
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
  const [getPopUpAllFeature, setPopUpAllFeature] = useState(false);

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
        <div
          onClick={() => setPopUpAllFeature(!getPopUpAllFeature)}
          className="flex bg-neutral-200 items-center flex justify-center w-[36px] h-[36px] rounded-lg"
        >
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
              width={36}
              height={36}
              onClick={() => setPopUp(!getPopUp)}
              className="bg-white rounded-lg flex text-neutral-600 items-center justify-center font-[700]"
            />
            {getPopUp && <PopUpMenu {...props} avatar={props.avatar} />}
            {getPopUpAllFeature && <PopUpAllFeature {...props} />}
          </div>
        )}
      </nav>
    </header>
  );
};
