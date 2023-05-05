import React, { FC, ReactElement } from 'react';
import { useAdministrationStatus } from '../../hooks';

export const TitleAdministration: FC = (): ReactElement => {
  const { getAdministrationStatus } = useAdministrationStatus();

  return (
    <div className="title  w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left mb-2">
        Administrasi
      </h1>
      <p
        className={`${
          getAdministrationStatus === 'none' ? ' text-[#ED3768]' : 'text-[#000]'
        } `}
      >
        {getAdministrationStatus === 'finished'
          ? 'Menunggu Persetujuan Approve'
          : 'Kamu harus mengisi administrasi untuk bisa mengambil Rencana Pelatihan.'}
      </p>
    </div>
  );
};
