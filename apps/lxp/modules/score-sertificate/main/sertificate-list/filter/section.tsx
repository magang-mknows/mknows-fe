import { Menu, Transition } from "@headlessui/react";
import { FC, ReactElement } from "react";
import { TbBrandMixpanel } from "react-icons/tb";
import { SertificateFilterOptions } from "./const";

export const SertificateFilter: FC = (): ReactElement => {
  return (
    <nav className="w-full flex justify-end">
      <Menu as="div" className="relative inline-block text z-50 ">
        <Menu.Button
          name="filter-option"
          aria-label="filter-option"
          className={
            "text-sm py-2 w-24 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
          }
        >
          <TbBrandMixpanel />
          <h1>Filter</h1>
        </Menu.Button>
        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Menu.Items className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-neutral-50 shadow-md">
            {SertificateFilterOptions.map((option, index) => {
              return (
                <div key={index} className="border-b-[0.5px] border-neutral-200">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? " border-version2-400  text-neutral-50 " : "border-neutral-50"
                        } border-l-4   flex text-sm justify-between gap-2 w-full px-6 py-2 text-neutral-800 dark:text-white  ease-in-out group `}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};
