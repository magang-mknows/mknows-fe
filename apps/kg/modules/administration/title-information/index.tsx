import { useAdministrationStatus } from '../hooks';
import React, { FC, ReactElement } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';

export const TitleAdministration: FC = (): ReactElement => {
  const { getAdministrationStatus } = useAdministrationStatus();

  return (
    <div className="title lg:px-20 px-5 w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left mb-7">
        Administrasi
      </h1>
      <div
        className={`${
          getAdministrationStatus === 'none'
            ? 'bg-yellow-100'
            : 'bg-primary-100'
        } w-full flex items-center gap-x-4 px-4 py-2.5 rounded-lg`}
      >
        <RiErrorWarningFill
          className={`${
            getAdministrationStatus === 'none'
              ? 'text-yellow-500'
              : 'text-primary-500'
          } `}
        />
        <p
          className={`${
            getAdministrationStatus === 'none'
              ? 'text-yellow-500'
              : 'text-primary-500'
          } `}
        >
          {getAdministrationStatus === 'finished'
            ? 'Menunggu Persetujuan Approve'
            : 'Kamu harus mengisi administrasi untuk bisa mengambil rencana studi.'}
        </p>
      </div>
    </div>
  );
};
