import { FC, Fragment, ReactElement } from "react";
import { ScoreSertificateMenu } from "./const";
import { useRecoilState } from "recoil";
import { Tab } from "@headlessui/react";
import { ScoreTable } from "./score-table/section";
import { ScoreSummaryTable } from "./score-summary-table";
import { ScoreChart } from "./score-chart/section";
import SertificateList from "./sertificate-list/section";
import { showDetailState } from "./store";

export const ScoreSertificateMain: FC = (): ReactElement => {
  const [getShowDetail, setShowDetail] = useRecoilState(showDetailState);

  return (
    <main className=" min-h-[80vh] px-8 md:px-14 lg:px-16 ">
      <Tab.Group>
        <Tab.List
          as={"div"}
          className="flex gap-2  mb-5 text-base border-b-[0.5px] border-neutral-400 text-neutral-400"
        >
          {ScoreSertificateMenu.map((menu, index) => {
            return (
              <Tab as={Fragment} key={index}>
                {({ selected }) => (
                  <div
                    className={`${
                      selected
                        ? " font-bold border-b-2 outline-none   border-version3-500 text-version3-500"
                        : ""
                    } py-2 px-4 cursor-pointer text-base`}
                    onClick={() => {
                      setShowDetail(false);
                    }}
                  >
                    {menu}
                  </div>
                )}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel
            as="section"
            className={`${getShowDetail ? "" : "grid grid-cols-1 lg:grid-cols-2 gap-10"} py-2 `}
          >
            {getShowDetail ? (
              <ScoreTable />
            ) : (
              <Fragment>
                <ScoreChart />
                <ScoreSummaryTable />
              </Fragment>
            )}
          </Tab.Panel>

          <Tab.Panel as="section" className="py-2">
            <SertificateList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
};
