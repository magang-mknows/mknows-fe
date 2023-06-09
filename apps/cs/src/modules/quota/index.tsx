import { FC, Fragment, ReactElement, useState, Suspense } from "react";
import { Tab } from "@headlessui/react";
import LoadingRequest from "../../modules/request/loading";
import Card from "../../components/molecules/card";

import AlokasiKuota from "./alocation-quota";
import RiwayatAlokasi from "./history-alocation";

const QuotaPage: FC = (): ReactElement => {
  const [active, setActive] = useState("alokasi");
  return (
    <Suspense fallback={<LoadingRequest />}>
      <Tab.Group>
        <section className="w-full flex h-fit relative py-2 justify-center lg:justify-end lg:pr-4">
          <Card className="w-full h-fit rounded-lg bg-white">
            <div className="px-11 py-4 flex flex-col w-full ">
              <Tab.List
                className="flex flex-row gap lg:gap-x-8 md:gap-x-2 text-base font-semibold"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                <Tab as={Fragment}>
                  <button>
                    <div
                      className={`inline-block p-4 ${
                        active === "alokasi" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs md:text-base `}
                      aria-current="page"
                      onClick={() => setActive("alokasi")}
                    >
                      Alokasi Kuota
                    </div>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <div
                      className={`inline-block p-4 ${
                        active === "riwayat" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs md:text-base`}
                      aria-current="page"
                      onClick={() => setActive("riwayat")}
                    >
                      Riwayat Alokasi Kuota
                    </div>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                {/* tab 1 */}
                <Tab.Panel>
                  <AlokasiKuota />
                </Tab.Panel>
                {/* tab 2 */}
                <Tab.Panel>
                  <RiwayatAlokasi />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Card>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default QuotaPage;
