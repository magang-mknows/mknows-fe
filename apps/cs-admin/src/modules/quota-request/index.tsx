import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { CardCS, DateRangePickerComponent } from "@mknows-frontend-services/components/molecules";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";
import { IconFilter, Search } from "@mknows-frontend-services/components/atoms";
import RequestQuotaTab from "./request-quota";
import RequestHistoryTab from "./request-history";

const RequestQuota: FC = (): ReactElement => {
  const [active, setActive] = useState("permintaan");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();
  const [isOption, setOption] = useState("");

  useEffect(() => {
    if (query.get("tab") === "permintaan") {
      setActive("permintaan");
    }
    if (query.get("tab") === "riwayat") {
      setActive("riwayat");
    }
  }, []);
  // const handleRangeChange = (data: any) => {
  //   const startDate = new Date(data.startDate).toISOString();
  //   const endDate = new Date(data.endDate).toISOString();
  //   setOption((prev) => ({ ...prev, date_from: startDate, date_to: endDate }));
  // };
  return (
    <Suspense>
      <Tab.Group>
        <section className="w-full flex h-fit relative py-2 justify-center lg:justify-end lg:pr-4">
          <CardCS className="w-full h-fit rounded-lg bg-white">
            <div className="px-10 py-4 flex flex-col w-full">
              <div className="flex flex-col xl:flex-row xl:justify-between justify-center w-full xl:gap-y-0 gap-y-4">
                <Tab.List className="flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 px-4 py-2">
                  <Tab as={Fragment}>
                    <button>
                      <div
                        className={`inline-block p-2 ${
                          active === "permintaan" ? "text-neutral-800 bg-white rounded-lg" : ""
                        }       text-neutral-400 text-xs md:text-base px-4 py-2`}
                        aria-current="page"
                        onClick={() => {
                          navigate("/admin/quota-request?tab=permintaan", { replace: true });
                          setActive("permintaan");
                        }}
                      >
                        Permintaan Kuota
                      </div>
                    </button>
                  </Tab>
                  <Tab as={Fragment}>
                    <button>
                      <div
                        className={`inline-block p-2 ${
                          active === "riwayat" ? "text-neutral-800 bg-white rounded-lg" : ""
                        }       text-neutral-400 text-xs md:text-base px-4 py-2`}
                        aria-current="page"
                        onClick={() => {
                          navigate("/admin/quota-request?tab=riwayat", { replace: true });
                          setActive("riwayat");
                        }}
                      >
                        Riwayat Permintaan Kuota
                      </div>
                    </button>
                  </Tab>
                </Tab.List>
                <div className="flex flex-row items-center gap-x-3">
                  <DateRangePickerComponent
                    onRangeChange={() => <>belum bang</>}
                    width="xl:w-[205px] w-[200px]"
                  />
                  <div className="flex items-center flex-row gap-x-3 border-2 border-neutral-300 rounded-md px-4 py-2 text-neutral-800 ">
                    <IconFilter />
                    <span className="font-semibold text-sm">Filter</span>
                  </div>
                  <div className="xl:w-[200px] w-full">
                    <Search value="" placeholder="Search NIK & Nama" />
                  </div>
                </div>
              </div>
              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {active === "permintaan" && <RequestQuotaTab />}
                </Suspense>
                <Suspense fallback="loading ...">
                  {active === "riwayat" && <RequestHistoryTab />}
                </Suspense>
              </Tab.Panels>
            </div>
          </CardCS>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default RequestQuota;
