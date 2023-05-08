import { ShowDetailStatus } from './store';
import { Tab } from '@headlessui/react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import { scoreBreadCumbs } from './constant';
import { BaseLayout } from '../common';
import { CertificateSection } from './section/certificate';

export const ScoreModule: FC = (): ReactElement => {
  const setDetailStatus = useSetRecoilState(ShowDetailStatus);
  return (
    <BaseLayout>
      <BreadCrumb items={scoreBreadCumbs} />
      <section className="py-1 bg-[#FAFAFA] dark:bg-gray-900">
        <main className="lg:px-20 px-10 min-h-[80vh] py-4 ">
          <Tab.Group>
            <Tab.List
              as={'div'}
              className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
            >
              <Tab
                as={'div'}
                onClick={() => {
                  setDetailStatus(false);
                }}
              >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected
                        ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                        : ''
                    } py-2 px-4 cursor-pointer`}
                  >
                    Nilai
                  </div>
                )}
              </Tab>
              <Tab as={'div'}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected
                        ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                        : ''
                    } py-2 px-4 cursor-pointer`}
                  >
                    Sertifikat
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ScoreModule />
              </Tab.Panel>
              <Tab.Panel>
                <CertificateSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>
      </section>
    </BaseLayout>
  );
};
