import { NextPage } from 'next';
import { Fragment, ReactElement } from 'react';
import { useSession } from 'next-auth/react';
import { logoutRequest } from '../../modules/auth/logout/api';

const ProfilePage: NextPage = (): ReactElement => {
  const { data } = useSession();
  return (
    <Fragment>
      <span>Profile Page</span>;
      <button
        onClick={async () => {
          await logoutRequest({
            refresh_token: data?.user?.token?.refresh_token as string,
          });
        }}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default ProfilePage;
