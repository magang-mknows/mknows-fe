import { Tab } from '@headlessui/react';
import { FC, ReactElement } from 'react';
import { TrainingContractTab } from './training-tab/training-tab';
import RepeatTrainingTab from './repeated-tab/repeated-tab';

export const TrainingContractMain: FC = (): ReactElement => {
  return (
    <main className="px-8 md:px-14 lg:px-16">
      <Tab.Group>
        <Tab.List className="border-b-2 border-neutral-200 mb-6">
          <Tab>
            {({ selected }) => (
              <h1
                className={`${
                  selected
                    ? 'text-version2-500 border-version2-500 border-b-2 font-bold'
                    : ' text-neutral-400'
                } text-sm pb-2 mr-4 transition-all ease-in-out duration-75`}
              >
                Kontrak Pelatihan
              </h1>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <h1
                className={`${
                  selected
                    ? 'text-version2-500 border-version2-500 border-b-2 font-bold'
                    : ' text-neutral-400'
                } text-sm pb-2 transition-all ease-in-out duration-75`}
              >
                Pelatihan Mengulang
              </h1>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TrainingContractTab />
          </Tab.Panel>
          <Tab.Panel>
            <RepeatTrainingTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
};
