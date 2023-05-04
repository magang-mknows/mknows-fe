import { EditProfileModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return <EditProfileModule />;
};

export default ProfilePage;
