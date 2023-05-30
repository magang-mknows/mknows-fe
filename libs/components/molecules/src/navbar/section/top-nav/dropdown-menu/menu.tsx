import { FC, Fragment, ReactElement, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { TBottomNavProps } from "../../bottom-nav";
import { MdOutlineNavigateNext } from "react-icons/md";

export const NavMenuDropDown: FC<TBottomNavProps> = ({ bottomNavItems }): ReactElement => {
  const bottomNavItemsName = bottomNavItems.map((item) => {
    return item.name;
  });

  const [selected, setSelected] = useState(bottomNavItemsName[0]);

  return (
    <Listbox value={selected} onChange={setSelected} as="div" className="lg:hidden">
      <div className="relative mt-1">
        <Listbox.Button className="relative w-auto justify-between flex items-center  py-2 pl-2  text-left  text-sm gap-2">
          <span className="block text-neutral-600 font-bold">{selected}</span>
          <MdOutlineNavigateNext className="rotate-90 text-neutral-600 text-xl " />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-36 rounded-md py-2  text-sm bg-white shadow-md ">
            {bottomNavItems.map((item, index) => (
              <Listbox.Option key={index} value={item.name}>
                {({ selected }) => (
                  <span className="block py-3 px-3 text-neutral-600">{item.name}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
