import { FC, ReactElement } from 'react';
import { administrationBreadCumbs } from './constant';
import { ContentAdministration } from './content-administration/section';
import { TitleAdministration } from './title-information';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col h-full">
      <div className=" bg-[#F5F5F5] w-full">
        <BreadCrumb items={administrationBreadCumbs} />
        <TitleAdministration />
        <ContentAdministration />
      </div>
    </section>
  );
};
