import { ReactElement, FC, Fragment } from 'react';
import { TProviderProps } from '../types';
import { Montserrat } from 'next/font/google';
import { Modal, Navbar } from '@mknows-frontend-services/components/molecules';
import { MdLogout, MdDashboard } from 'react-icons/md';
import { FcDocument } from 'react-icons/fc';
import { FaRegUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { logoutRequest } from '../../../../modules/auth/logout/api';
import { useProfile } from '../../../../modules/profile/hooks';
import { Button } from '@mknows-frontend-services/components/atoms';
import { _bottom_nav_items, _nav_rules } from './const';
import { useRecoilState } from 'recoil';
import { LoginFormPopup, LoginPopupState } from '../../../../modules';

import logo from '../../assets/mknows-logo.svg';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

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

  const { data: profileData } = useProfile();

  const [getLoginPopup, setLoginPopup] = useRecoilState(LoginPopupState);

  const _features = [
    {
      name: 'Feature 1',
      link: '/feature-1',
      icon: <MdDashboard />,
    },
  ];

  const _profile_user = {
    email: profileData?.data?.user?.email,
    full_name: profileData?.data?.user?.full_name,
    avatar: profileData?.data.user.avatar || '/assets/images/avatar-dummy.png',
  };

  return (
    <div className={`${montserrat.className} max-w-[2200px] container mx-auto`}>
      <Navbar
        items={_pop_up_menu}
        features={_features}
        avatar={
          profileData?.data.user.avatar || '/assets/images/avatar-dummy.png'
        }
        logo={logo}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle={`w-auto h-auto p-2 text-[14px] rounded-lg bg-primary-500 text-white font-reguler`}
        button={
          <Fragment>
            <Button
              onClick={() => {
                setLoginPopup(true);
              }}
              type="button"
              className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 text-sm py-2 w-24"
            >
              <h1>Masuk</h1>
            </Button>
            <Button
              type="button"
              href="/auth/register"
              className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 w-24 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
            >
              <h1>Daftar</h1>
            </Button>
          </Fragment>
        }
      />
      <section className={'bg-neutral-100 min-h-[120vh] '}>{children}</section>
      <Modal
        withClose
        lookup={getLoginPopup}
        onClose={() => setLoginPopup(false)}
      >
        <LoginFormPopup />
      </Modal>
    </div>
  );
};
