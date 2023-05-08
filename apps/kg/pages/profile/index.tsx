import { BaseLayout, EditProfileModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Ubah Profile">
      <EditProfileModule />
    </BaseLayout>
  );
};

export default ProfilePage;
