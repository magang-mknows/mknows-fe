import { Navbar } from '@mknows-frontend-services/components/molecules';
import { FC, Fragment, ReactElement } from 'react';
import { logoutRequest } from '../modules/auth/logout/api';
import { useSession } from 'next-auth/react';
import { Button } from '@mknows-frontend-services/components/atoms';

const Landing: FC = (): ReactElement => {
  const { data } = useSession();
  const _pop_up_menu = [
    {
      name: 'Logout',
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
  ];
  return (
    <Fragment>
      <Navbar
        items={_pop_up_menu}
        logo={'/assets/icons/ic-logo-blue.svg'}
        logoStyle="w-auto h-auto"
        bottomNavItems={_bottom_nav_items}
        bottomNavItemStyle={
          'w-auto h-auto p-2 rounded-lg bg-primary-500 text-white font-reguler'
        }
        button={
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
              className="text-white px-4 py-1.5 rounded-lg w-auto h-auto bg-primary-500"
            >
              Daftar
            </Button>
          </Fragment>
        }
      />
      <section className="h-screen bg-neutral-200 w-full"></section>
    </Fragment>
  );
};

export default Landing;
