import { BaseLayout, ProfileModule } from '../../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfileEditPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Unggah CV & Portofolio">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfileEditPage;
