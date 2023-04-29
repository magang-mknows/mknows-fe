import { Navbar } from '@mknows-frontend-services/components/molecules';
import { FC, Fragment, ReactElement } from 'react';

const Landing: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar
        logo={'/assets/icons/ic-logo-blue.svg'}
        logoStyle="w-auto h-auto"
      />
      <section className="h-screen bg-neutral-200 w-full"></section>
    </Fragment>
  );
};

export default Landing;
