import { NextPage } from 'next';
import { ProfileModule } from '../../modules';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return <ProfileModule />;
};

export default ProfilePage;
