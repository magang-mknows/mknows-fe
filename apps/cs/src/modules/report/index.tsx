import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { LoadingReport } from "./loading";
import { Tab } from "@headlessui/react";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import ReportRequest from "./report-request";
import ReportModules from "./report-user/report";

const ReportPage: FC = (): ReactElement => {
  const [active, setActive] = useState("laporan user");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("tab") === "laporan-user") {
      setActive("laporan user");
    }
    if (query.get("tab") === "laporan-permintaan") {
      setActive("laporan permintaan");
    }
  }, []);
  return (
    <Suspense fallback={<LoadingReport />}>
      <Tab.Group>
        <section className="w-full flex h-fit relative pt-2 overflow-hidden justify-center lg:justify-end lg:pr-4">
          <CardCS className="w-full h-fit rounded-lg bg-white">
            <div className="px-11 py-4 flex flex-col w-full ">
              <Tab.List
                className="flex flex-row gap lg:gap-x-8 md:gap-x-2 text-base font-semibold"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                <Tab as={Fragment}>
                  <button>
                    <span
                      className={`inline-block p-4 ${
                        active === "laporan user" ? "text-primary-400 " : ""
                      }       text-neutral-400 text-xs md:text-base `}
                      aria-current="page"
                      onClick={() => {
                        navigate("/dashboard/report?tab=laporan-user", { replace: true });
                        setActive("laporan user");
                      }}
                    >
                      Laporan Customer
                    </span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <span
                      className={`inline-block p-4 ${
                        active === "laporan permintaan"
                          ? "text-primary-400 border-b-4 border-primary-400"
                          : ""
                      }       text-neutral-400 text-xs md:text-base`}
                      aria-current="page"
                      onClick={() => {
                        navigate("/dashboard/report?tab=laporan-permintaan", { replace: true });
                        setActive("laporan permintaan");
                      }}
                    >
                      Laporan Permintaan
                    </span>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {active === "laporan user" && <ReportModules />}
                </Suspense>
                <Suspense fallback="loading ...">
                  {active === "laporan permintaan" && <ReportRequest />}
                </Suspense>
              </Tab.Panels>
            </div>
          </CardCS>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default ReportPage;
