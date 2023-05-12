import { RegistrationVideoModule } from '../../../../modules/guide/registration-video';
import { NextPage } from 'next';
import { ReactElement, Suspense } from 'react';

const page: NextPage = (): ReactElement => {
  return <RegistrationVideoModule />;
};

export default page;
