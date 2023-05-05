import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { ScoreSertificateBreadCumbs } from './const';
import { ScoreSertificateMain } from './main';

export const ScoreSertificateModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60  h-full">
        <BreadCrumb
          items={ScoreSertificateBreadCumbs}
          textColor="text-version2-400"
        />
        <ScoreSertificateMain />
      </section>
    </ClientProvider>
  );
};
