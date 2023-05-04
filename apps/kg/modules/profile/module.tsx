import { FC, Fragment, ReactElement } from 'react';
import { EditProfile } from './section/EditProfile';

export const ProfileModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <EditProfile />
    </Fragment>
  );
};
