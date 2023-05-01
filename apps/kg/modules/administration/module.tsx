import { FC, ReactElement } from 'react';
import { administrationBreadCumbs } from './constant';
import { ContentAdministration } from './content-administration/section';
import { TitleAdministration } from './title-information';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { BaseLayout } from '../common';

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <BaseLayout title="Administrasi">
      <div className=" bg-[#F5F5F5] w-full pb-[249px]">
        <BreadCrumb items={administrationBreadCumbs} />
        <TitleAdministration />
        <ContentAdministration />
      </div>
    </BaseLayout>
  );
};
