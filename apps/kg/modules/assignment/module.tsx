import { FC, Fragment, ReactElement } from 'react';
import { BannerSection, ContentSection } from './section';

export const AssignmentModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <BannerSection />
      <ContentSection />
    </Fragment>
  );
};
