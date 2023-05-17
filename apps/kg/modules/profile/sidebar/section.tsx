import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

export const ProfileSidebar: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <section className="w-full col-span-2 px-3 py-2 bg-white rounded-md h-fit lg:col-span-1 text-[#737373] font-semibold text-sm">
      <Link href={'/profile'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile'
              ? ' bg-primary-100 '
              : 'bg-white transition-all ease-linear duration-75'
          }`}
        >
          Lihat Profile
        </h1>
      </Link>
      <Link href={'/profile/edit-profile'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/edit-profile'
              ? ' bg-primary-100 '
              : 'bg-white transition-all ease-linear duration-75'
          }`}
        >
          Edit Profile
        </h1>
      </Link>
      <Link href={'/profile/cv-portofolio'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/cv-portofolio'
              ? ' bg-primary-100'
              : 'bg-white transition-all ease-linear duration-75'
          }`}
        >
          CV & Portofolio
        </h1>
      </Link>
      <Link href={'/profile/ubah-password'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/ubah-password'
              ? ' bg-primary-100'
              : 'bg-white transition-all ease-linear duration-75'
          }`}
        >
          Change Password
        </h1>
      </Link>
    </section>
  );
};
