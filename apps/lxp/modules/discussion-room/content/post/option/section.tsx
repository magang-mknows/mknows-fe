import { FC, ReactElement } from "react";
import { GoKebabVertical } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useSetRecoilState } from "recoil";

import { TSelectedOptionId } from "./types";
import { isModalOpen, selectedOption, selectedPostId } from "../../store";

export const DiscussionPostOption: FC<TSelectedOptionId> = ({ id }): ReactElement => {
  const options = [
    {
      title: "Report",
      icon: <AiFillFlag className="text-blue-600" />,
    },
    {
      title: "Edit",
      icon: <BsPencilFill className="text-version3-400" />,
    },
    {
      title: "Delete",
      icon: <MdDelete className="text-warning-500" />,
    },
  ];

  const setSeletedOption = useSetRecoilState(selectedOption);
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const setSelectedPosId = useSetRecoilState(selectedPostId);

  return (
    <Menu as="div" className={" inline-block bg-neutral-50/0   text-left left-0 mt-1.5"}>
      <Menu.Button>
        <div className="cursor-pointer text-neutral-800 group">
          <GoKebabVertical />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items
          as="div"
          className="absolute bg-neutral-50 right-0 overflow-hidden origin-top-right bg-white rounded-md shadow-lg top-2 w-30 "
        >
          {options.map(({ icon, title }, index) => (
            <Menu.Item
              key={index}
              as="div"
              className={
                "flex gap-3 items-center px-4 py-3 cursor-pointer  hover:bg-neutral-100 transition-all duration-300 ease-in-out"
              }
              onClick={() => {
                setSelectedPosId(id as unknown as string);
                setSeletedOption(title.toLowerCase());
                setOptionOpen(true);
              }}
            >
              {icon}
              <h1 id="post-option" className="text-neutral-800  text-xs text-center">
                {title}
              </h1>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
