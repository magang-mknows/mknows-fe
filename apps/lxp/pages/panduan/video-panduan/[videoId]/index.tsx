import { RegistrationVideoModule } from '../../../../modules/guide-guide video';
import { NextPage } from 'next';
import React, { ReactElement, Suspense } from 'react';

const page: NextPage = (): ReactElement => {
  return (
    <Suspense>
      <RegistrationVideoModule />
    </Suspense>
  );
};

export default page;
