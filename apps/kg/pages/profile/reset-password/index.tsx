import { BaseLayout } from '../../../modules';
import { ResetPassword } from '../../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfileEditPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Ubah Profile">
      <ResetPassword />
    </BaseLayout>
  );
};

export default ProfileEditPage;
