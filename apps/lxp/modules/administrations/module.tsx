import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { administrationBreadCumbs } from './constant';
import { ContentAdministration, TitleAdministration } from './section';

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <div className=" bg-[#F5F5F5] w-full">
        <BreadCrumb
          items={administrationBreadCumbs}
          textColor="text-version2-400"
        />
        <div className="bg-[#FFFF] container mx-auto rounded-md p-10 min-h-screen ">
          <TitleAdministration />
          <ContentAdministration />
        </div>
      </div>
    </ClientProvider>
  );
};
