import { NextPage } from 'next';
import { Fragment, ReactElement } from 'react';
import { signOut } from 'next-auth/react';

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <Fragment>
      <span>Profile Page</span>;
      <button onClick={() => signOut()}>Logout</button>
    </Fragment>
  );
};

export default ProfilePage;
