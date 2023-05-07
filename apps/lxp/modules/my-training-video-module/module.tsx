import React, { Fragment, ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import ContentSection from './section/ContentSection';
import { myTrainingModuleBreadCumbs } from '../mytraining-module/const';

export const MyTrainingVideoModule = (): ReactElement => {
  return (
    <Fragment>
      <BreadCrumb items={myTrainingModuleBreadCumbs} />
      <ContentSection />
    </Fragment>
  );
};
