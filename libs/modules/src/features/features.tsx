import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { FC, Fragment, ReactElement } from 'react';
import { FeaturesBreadCumbs } from './const';
import { ContentSection } from './content';

export const FeaturesModule: FC = (): ReactElement => {
  return (
    <section className="min-h-[120vh] bg-neutral-100">
      <BreadCrumb items={FeaturesBreadCumbs} textColor="text-version2-400" />
      <section className=" px-8 md:px-14 lg:px-16 py-2 md:py-4 lg:py-8 flex flex-col justify-center items-center mb-3 ">
        <div className="max-w-[720px] text-center">
          <h1 className="font-bold text-neutral-900 text-3xl mb-4">
            Fitur Kampus Gratis
          </h1>
          <p className="text-neutral-400 text-sm font-medium">
            Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di
            Kampus Gratis. Berbagai macam jenis materi tersedia.
          </p>
        </div>
      </section>
      <ContentSection />
    </section>
  );
};
