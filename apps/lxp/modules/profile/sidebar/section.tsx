import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

export const ProfileSidebar: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <section className="px-3 py-2 rounded-md shadow-sm bg-neutral-50 h-fit w-full col-span-2 lg:col-span-1">
      <Link href={'/profile'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile'
              ? ' bg-version2-400 text-neutral-50  shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          View Profile
        </h1>
      </Link>
      <Link href={'/profile/edit-profile'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/edit-profile'
              ? ' bg-version2-400 text-neutral-50  shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          Edit Profile
        </h1>
      </Link>
      <Link href={'/profile/cv-portofolio'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/cv-portofolio'
              ? ' bg-version2-400 text-neutral-50 shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          CV & Portofolio
        </h1>
      </Link>
      <Link href={'/profile/ubah-password'}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer  ${
            pathname === '/profile/ubah-password'
              ? ' bg-version2-400 text-neutral-50 shadow-md'
              : 'bg-neutral-50 text-neutral-800 transition-all ease-linear duration-75'
          }`}
        >
          Change Password
        </h1>
      </Link>
    </section>
  );
};
