import { FC } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { ConsultingBreadCumbs } from './const';
import {
  ConsultingAndServiceHeader,
  ConsultingAndServiceProduct,
  ConsultingAndServiceQuestion,
} from './section';

export const ConsultingServiceModule: FC = () => {
  return (
    <ClientProvider>
      <BreadCrumb items={ConsultingBreadCumbs} textColor="text-version2-400" />
      <ConsultingAndServiceHeader />
      <ConsultingAndServiceProduct />
      <ConsultingAndServiceQuestion />
    </ClientProvider>
  );
};
