import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";
import LoadingRequest from "../../modules/request/loading";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import RequestModule from "./feature/request";
import ProcessModule from "./process";
import ResultModule from "./result";
import { ToastContainer } from "react-toastify";

const RequestPage: FC = (): ReactElement => {
  const [active, setActive] = useState("permintaan");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("tab") === "permintaan") {
      setActive("permintaan");
    }
    if (query.get("tab") === "proses") {
      setActive("proses");
    }
    if (query.get("tab") === "hasil") {
      setActive("hasil");
    }
  }, []);
  return (
    <Suspense fallback={<LoadingRequest />}>
      <Tab.Group>
      <ToastContainer theme="dark" autoClose={2000} className={"text-sm"} />
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
                        active === "permintaan" ? "text-primary-400 " : ""
                      }       text-neutral-400 text-xs md:text-base `}
                      aria-current="page"
                      onClick={() => {
                        navigate("/dashboard/request?tab=permintaan", { replace: true });
                        setActive("permintaan");
                      }}
                    >
                      Permintaan
                    </span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <span
                      className={`inline-block p-4 ${
                        active === "proses" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs md:text-base`}
                      aria-current="page"
                      onClick={() => {
                        navigate("/dashboard/request?tab=proses", { replace: true });
                        setActive("proses");
                      }}
                    >
                      Proses
                    </span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <span
                      className={`inline-block p-4 ${
                        active === "hasil" ? "text-primary-400 border-b-4 border-primary-400" : ""
                      }       text-neutral-400 text-xs  md:text-base`}
                      aria-current="page"
                      onClick={() => {
                        navigate("/dashboard/request?tab=hasil", { replace: true });
                        setActive("hasil");
                      }}
                    >
                      Hasil
                    </span>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {active === "permintaan" && <RequestModule />}
                </Suspense>
                <Suspense fallback="loading ...">
                  {active === "proses" && <ProcessModule />}
                </Suspense>
                <Suspense fallback="loading ...">{active === "hasil" && <ResultModule />}</Suspense>
              </Tab.Panels>
            </div>
          </CardCS>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default RequestPage;
