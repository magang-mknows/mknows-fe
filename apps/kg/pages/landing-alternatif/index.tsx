import { NextPage } from 'next';
import { BaseLayout, LandingAlternatif } from '../../modules';
import { ReactElement } from 'react';

const LandingAltPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Landing-alt">
      <LandingAlternatif />
    </BaseLayout>
  );
};

export default LandingAltPage;
