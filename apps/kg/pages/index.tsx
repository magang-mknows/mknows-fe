import { FC, Fragment, ReactElement } from 'react';
import { Navbar } from '@mknows-frontend-services/components/molecules';

const _navbar = [
  {
    name: 'Home',
    link: '/',
  },
];

const Landing: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar navItems={_navbar} navItemStyle="text-neutral-400 font-medium" />
      <div className="flex">
        <h1 className="text-4xl text-red-400">Anjay Mabar</h1>
      </div>
    </Fragment>
  );
};

export default Landing;
