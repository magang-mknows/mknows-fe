import { Tab } from '@headlessui/react';
import { FC, Fragment, ReactElement } from 'react';
import { ducumentStatus } from './const';

export const DocumentStatusTab: FC = (): ReactElement => {
  return (
    <Tab.List
      as="div"
      className="px-8 md:px-14 lg:px-16 w-full border-b-2 border-neutral-300 flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-10"
    >
      {ducumentStatus.map((status, index) => {
        return (
          <Tab key={index} as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? 'text-version3-500 border-b-2 border-version3-500 outline-none  focus:outline-none active:outline-none'
                    : 'text-neutral-900'
                } font-bold py-4 focus:outline-none outline-none `}
              >
                {status}
              </button>
            )}
          </Tab>
        );
      })}
    </Tab.List>
  );
};
