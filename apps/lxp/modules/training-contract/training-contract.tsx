import React, { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { TrainingContractBreadCumbs } from '../training-information/const';
import { TrainingContractHeader } from './header';
import { TrainingContractMain } from './main';

export const TrainingContractModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb
        items={TrainingContractBreadCumbs}
        textColor="text-version2-400"
      />
      <TrainingContractHeader />
      <TrainingContractMain />
    </ClientProvider>
  );
};
