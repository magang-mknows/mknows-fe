import { BaseLayout, ProfileModule } from '../../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfileEditPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Ubah Password">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfileEditPage;
