import { NextPage } from 'next';
import { Fragment, ReactElement } from 'react';
import { signOut } from 'next-auth/react';
import { logoutRequest } from '../../modules';
import { useSession } from 'next-auth/react';

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
          signOut();
        }}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default ProfilePage;
