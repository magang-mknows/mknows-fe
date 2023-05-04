'use client';

import { ReactElement, FC, Fragment } from 'react';
import { TProviderProps } from '../types';

import { Montserrat } from 'next/font/google';
import { Navbar } from '@mknows-frontend-services/components/molecules';

import { MdLogout, MdDashboard } from 'react-icons/md';
import { FcDocument } from 'react-icons/fc';
import { FaRegUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { logoutRequest } from '../../../../modules/auth/logout/api';
import { useProfile } from '../../../../modules/profile/hooks';
import { Button } from '@mknows-frontend-services/components/atoms';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

const AuthButton: FC = (): ReactElement => (
  <Fragment>
    <Button
      href="/auth/login"
      type="button"
      className="border-2 border-primary-base text-primary-500 px-4 py-1.5 rounded-lg w-auto h-auto"
    >
      Masuk
    </Button>
    <Button
      href="/auth/register"
      type="button"
      className="text-white px-4 py-1.5 border-2 border-primary-500 rounded-lg w-auto h-auto bg-primary-500"
    >
      Daftar
    </Button>
  </Fragment>
);

export const ClientProvider: FC<TProviderProps> = ({
  children,
}): ReactElement => {
  const router = useRouter();
  const { data } = useSession();
  const _pop_up_menu = [
    {
      name: 'Dashboard',
      onClick: () => router.push('/dashboard'),
      icon: <MdDashboard size={20} className="text-primary-base" />,
    },
    {
      name: 'Profile',
      onClick: () => router.push('/user/profile'),
      icon: <FaRegUserCircle size={20} className="text-warning-base" />,
    },
    {
      name: 'Administrasi',
      icon: <FcDocument size={20} className="text-success-base" />,
      onClick: () => router.push('/administrasi'),
    },
    {
      name: 'Logout',
      icon: <MdLogout size={20} className="text-error-base" />,
      onClick: async () => {
        await logoutRequest({
          refresh_token: data?.user?.token?.refresh_token as string,
        });
      },
    },
  ];

  const _bottom_nav_items = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Studi Ku',
      link: '/studi-ku',
    },
    {
      name: 'Penugasan',
      link: '/penugasan',
    },
    {
      name: 'Nilai & Sertifikat',
      link: '/nilai-sertifikat',
    },
  ];

  const _features = [
    {
      name: 'Feature 1',
      link: '/feature-1',
      icon: <MdDashboard />,
    },
  ];

  const { data: profileData } = useProfile();

  const _nav_rules = [
    '/dashboard',
    '/studi-ku',
    '/penugasan',
    '/nilai-sertifikat',
  ];

  const _profile_user = {
    email: profileData?.data?.user?.email,
    full_name: profileData?.data?.user?.full_name,
    avatar: profileData?.data.user.avatar || '/assets/images/avatar-dummy.png',
  };
  return (
    <div className={`${montserrat.className} max-w-[2200px] container mx-auto`}>
      {/* <Navbar
        items={_pop_up_menu}
        features={_features}
        avatar={
          profileData?.data.user.avatar || '/assets/images/avatar-dummy.png'
        }
        logo={'/assets/icons/ic-logo-blue.svg'}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle={`w-auto h-auto p-2 text-[14px] rounded-lg bg-primary-500 text-white font-reguler`}
        button={<AuthButton />}
      /> */}
      <section className={'bg-neutral-100 min-h-[120vh] pb-20 '}>
        {children}
      </section>
    </div>
  );
};
