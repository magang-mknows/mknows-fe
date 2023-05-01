import { FC, ReactElement } from 'react';
import { BaseLayout, LandingModule } from '../modules';

const LandingPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Home">
      <section className="h-full flex-col flex bg-neutral-100 w-full">
        <LandingModule />
      </section>
    </BaseLayout>
  );
};

export default LandingPage;
