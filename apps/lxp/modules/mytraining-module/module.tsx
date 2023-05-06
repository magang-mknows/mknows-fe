import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { myTrainingModuleBreadCumbs } from './const';
import { MtTrainingModuleMain } from './main';
import { ContentFooter } from '../common/footer/footer-content';

export const MyTrainingModulModules: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb
        items={myTrainingModuleBreadCumbs}
        textColor="text-version2-400"
      />
      <MtTrainingModuleMain />
      <ContentFooter />
    </ClientProvider>
  );
};
