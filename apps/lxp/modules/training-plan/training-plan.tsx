import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { TrainingPlanBreadCumbs } from './const';
import { TrainingPlanHeader } from './header';
import { TrainingPlanMain } from './main';
import { UnChoosenSection } from './unchoose';

export const TrainingPlanModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb
        items={TrainingPlanBreadCumbs}
        textColor="text-version2-400"
      />
      <UnChoosenSection />
      {/* <TrainingPlanHeader /> */}
      {/* <TrainingPlanMain />s */}
    </ClientProvider>
  );
};
