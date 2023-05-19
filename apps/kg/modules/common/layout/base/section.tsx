import { Navbar } from '@mknows-frontend-services/components/molecules';
import { logoutRequest } from '../../../auth/logout/api';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FC, Fragment, ReactElement } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { MdDashboard, MdLogout } from 'react-icons/md';
import { Button } from '@mknows-frontend-services/components/atoms';
import { TBaseLayoutProps } from './types';
import Head from 'next/head';
import { DiscussionRoomIcon } from '../../assets/icons/ic-disccussion-room';
import { CareerPlanIcon } from '../../assets/icons/ic-career-plan';
import { ConsultationIcon } from '../../assets/icons/ic-consultation';
import { WorkOpportunityIcon } from '../../assets/icons/ic-work';
import { useProfile } from '../../../../modules/profile/section/edit-profile';
import Logo from './logo.svg';

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

export const BaseLayout: FC<TBaseLayoutProps> = ({
  children,
  title,
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
      onClick: () => router.push('/profile'),
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
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Nilai & Sertifikat',
      link: '/nilai-dan-sertifikat',
    },
  ];

  const _features = [
    {
      name: 'Ruang Diskusi',
      link: '/ruang-diskusi',
      icon: <DiscussionRoomIcon />,
    },
    {
      name: 'Perencanaan Karir',
      link: '/perencanaan-karir',
      icon: <CareerPlanIcon />,
    },
    {
      name: 'Konsultasi & Layanan',
      link: '/konsultasi-dan-layanan',
      icon: <ConsultationIcon />,
    },
    {
      name: 'Penyaluran Kerja',
      link: '/penyaluran-kerja',
      icon: <WorkOpportunityIcon />,
    },
  ];

  const _nav_rules = [
    '/dashboard',
    '/studi-ku',
    '/penugasan',
    '/rencana-studi',
    '/nilai-dan-sertifikat',
  ];

  const { data: profileData } = useProfile();
  const _profile_user = {
    email: profileData?.data?.user?.email as string,
    full_name: profileData?.data?.user?.full_name as string,
    avatar: profileData?.data.user.avatar as string,
  };
  return (
    <Fragment>
      <Head>
        <title>Kampus Gratis - {title}</title>
      </Head>
      <Navbar
        items={_pop_up_menu}
        features={_features}
        logo={Logo}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle={`w-auto h-auto p-3 text-[14px] rounded-lg bg-primary-500 text-white font-reguler`}
        button={<AuthButton />}
      />
      <section className="flex flex-col h-full">{children}</section>
    </Fragment>
  );
};
