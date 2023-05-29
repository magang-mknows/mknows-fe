import { Tab } from "@headlessui/react";
import { FC, ReactElement } from "react";
import { AssigmentStatus } from "../constant";
import { useTabAssigment } from "../hooks";

const AssigmentStatusTab: FC = (): ReactElement => {
  const { setTabAssigment } = useTabAssigment();
  return (
    <Tab.List
      as="div"
      className="px-8 md:px-14 lg:px-16 w-full border-b-2 border-neutral-300 flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-10"
    >
      {AssigmentStatus.map((status, index) => {
        return (
          <Tab key={index}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "text-version3-500 border-b-2 border-version3-500 "
                    : "text-neutral-900"
                } font-bold py-4 focus:outline-none outline-none `}
                onClick={() => setTabAssigment(status)}
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

export default AssigmentStatusTab;
