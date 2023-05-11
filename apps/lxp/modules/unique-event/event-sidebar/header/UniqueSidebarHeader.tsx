import { FC, Fragment, ReactElement } from 'react';

const UniqueSidebarHeader: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="mb-2 text-2xl font-bold text-neutral-900">Acara Unik</h1>
      <p className="text-sm text-neutral-600 mb-9">
        Pilih dan ikuti beragam webinar seru dan menarik dari LMS M-KNOWS
      </p>
    </Fragment>
  );
};

export default UniqueSidebarHeader;
