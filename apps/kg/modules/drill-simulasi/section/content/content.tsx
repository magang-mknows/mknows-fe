import { FC, ReactElement } from "react";
import { Tab } from "@headlessui/react";
import { SubmissonSimulasion, HistorySimulasion } from "./simulasion";

export const ContentSection: FC = (): ReactElement => {
  return (
    <Tab.Group>
      <Tab.List
        as={"div"}
        className=" mb-10 border-b-2 flex gap-6 px-2 text-lg text-neutral-400 font-medium"
      >
        <Tab>
          {({ selected }) => (
            <div
              className={`${
                selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
              } py-2 px-4 cursor-pointer`}
            >
              Pengajuan Simulasi
            </div>
          )}
        </Tab>
        <Tab as={"div"}>
          {({ selected }) => (
            <div
              className={`${
                selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
              } py-2 px-4 cursor-pointer`}
            >
              Riwayat Simulasi
            </div>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <SubmissonSimulasion />
        </Tab.Panel>
        <Tab.Panel>
          <HistorySimulasion />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
