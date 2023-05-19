import { FC, ReactElement, useState } from 'react';
import NextImage from 'next/image';
import { TNavbarProps, TPopUpAllFeaturesProps, TPopUpProps } from '../../types';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { IconFeature, IconRing } from '../icons';
import Image from 'next/image';
import { Button } from '@mknows-frontend-services/components/atoms';
import Link from 'next/link';

const PopUpMenu: FC<TPopUpProps> = ({ items, userData }): ReactElement => {
  return (
    <motion.section
      initial={{ opacity: '20%', top: 30 }}
      animate={{ opacity: '100%', top: 50 }}
      exit={{ opacity: '100%', top: 100 }}
      className="flex flex-col font-bold gap-y-3 w-[318px] bg-white absolute top-[60px] rounded-lg right-[-20px] z-30 shadow-lg p-4"
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
      <div className="flex flex-col gap-y-[26px]">
        {items.map((item, key) => (
          <div
            key={key}
            onClick={item.onClick}
            className={'flex items-center gap-x-3 cursor-pointer'}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const PopUpAllFeature: FC<TPopUpAllFeaturesProps> = ({
  features,
  onClick,
}): ReactElement => {
  return (
    <motion.section
      initial={{ opacity: '20%', top: 30 }}
      animate={{ opacity: '100%', top: 50 }}
      exit={{ opacity: '100%', top: 120 }}
      className="flex flex-col bg-white font-bold gap-y-3  absolute items-center w-auto top-0 rounded-lg right-[180px] shadow-lg"
    >
      <div className="flex w-full h-[91px] rounded-tl-lg rounded-tr-lg flex-col p-[16px] justify-center items-center bg-yellow-200">
        <h1 className="text-[20px]">Fitur</h1>
        <div className="flex bg-yellow-500 text-white p-2 rounded-lg">
          Total 16 Fitur
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4 p-4 grid-cols-2 w-full items-center justify-center place-items-center">
        {features.map((item, key) => (
          <Button
            onClick={onClick}
            type="button"
            href={item.link}
            key={key}
            className={
              'flex flex-col justify-start items-center gap-y-2 w-[137px] h-auto'
            }
          >
            <div>{item.icon}</div>
            <span className="text-sm font-normal">{item.name}</span>
          </Button>
        ))}
      </div>
      <Link
        href={'/semua-fitur'}
        className="flex bg-neutral-200 p-4 items-center justify-center rounded-bl-lg rounded-br-lg w-full text-neutral-700 font-[700]"
      >
        Lihat Semua
      </Link>
    </motion.section>
  );
};

export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  button,
  ...props
}): ReactElement => {
  const { data: session } = useSession();
  const [getPopUp, setPopUp] = useState(false);
  const [getPopUpAllFeature, setPopUpAllFeature] = useState(false);

  return (
    <header className="flex w-full justify-between px-[72px] relative py-[17px] bg-white">
      <Link href={'/'} className="flex items-center">
        <NextImage
          src={logo}
          alt="logo navbar"
          loading="eager"
          width={40}
          height={40}
          className={logoStyle}
          quality={75}
        />
      </Link>
      <nav className="flex items-center gap-x-6">
        <div
          onClick={() => {
            setPopUp(false);
            setPopUpAllFeature(!getPopUpAllFeature);
          }}
          className=" bg-neutral-200 items-center flex justify-center w-[36px] h-[36px] rounded-lg"
        >
          <IconFeature />
        </div>
        {!session ? (
          <div className="lg:flex gap-x-4 hidden">{button}</div>
        ) : (
          <div className="flex items-center gap-x-6 relative">
            <div className=" bg-neutral-200 items-center flex justify-center w-[36px] h-[36px] rounded-lg">
              <IconRing />
            </div>
            <Image
              src={props.userData.avatar}
              alt={'user avatar'}
              width={36}
              height={36}
              onClick={() => {
                setPopUpAllFeature(false);
                setPopUp(!getPopUp);
              }}
              className="bg-white rounded-lg flex text-neutral-600 items-center justify-center font-[700]"
            />
            {getPopUp && <PopUpMenu {...props} />}
          </div>
        )}
      </nav>
      {getPopUpAllFeature && (
        <PopUpAllFeature onClick={() => setPopUpAllFeature(false)} {...props} />
      )}
    </header>
  );
};
