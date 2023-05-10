import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, ReactElement } from 'react';

const UniqueSidebarOptions: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <section className="px-3 py-2 rounded-md shadow-sm bg-neutral-50">
      <Link href={'/acara-unik'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/acara-unik'
              ? ' bg-version2-400 text-neutral-50  shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          Daftar Event
        </h1>
      </Link>
      <Link href={'/acara-unik/terdaftar'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/acara-unik/terdaftar'
              ? ' bg-version2-400 text-neutral-50  shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          Event Terdaftar
        </h1>
      </Link>
      <Link href={'/acara-unik/riwayat'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/acara-unik/riwayat'
              ? ' bg-version2-400 text-neutral-50 shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          Riwayat Event
        </h1>
      </Link>
    </section>
  );
};

export default UniqueSidebarOptions;
