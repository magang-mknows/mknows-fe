import { FC, ReactElement } from 'react';
import { BaseLayout, LandingAlternatif } from '../modules';

const LandingPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Home" addSearch>
      <section className="h-full flex-col flex bg-neutral-100 w-full">
        <LandingAlternatif />
      </section>
    </BaseLayout>
  );
};

export default LandingPage;
