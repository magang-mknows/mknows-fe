import { ProfileModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return <ProfileModule />;
};

export default ProfilePage;
