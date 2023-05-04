import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { DocProcessBreadCumbs } from './const';
import DocumentProcessHeader from './header/header';
import { DocumentProcessForm } from './form';

export const DocumentServiceModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={DocProcessBreadCumbs} textColor="text-version2-400" />
      <DocumentProcessHeader />
      <DocumentProcessForm />
    </ClientProvider>
  );
};
