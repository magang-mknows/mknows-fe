import { BaseLayout, ProfileModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Profile User">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfilePage;
