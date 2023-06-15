import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";

const RequestQuota: FC = (): ReactElement => {
  const [active, setActive] = useState("permintaan");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("tab") === "permintaan") {
      setActive("permintaan");
    }
    if (query.get("tab") === "riwayat") {
      setActive("riwayat");
    }
  }, []);
  return (
    <Suspense>
      <Tab.Group>
        <section className="w-full flex h-fit relative py-2 justify-center lg:justify-end lg:pr-4">
          <CardCS className="w-full h-fit rounded-lg bg-white">
            <div className="px-11 py-4 flex flex-col w-full">
              <div className="flex flex-row w-full">
              <Tab.List
                className="flex flex-row gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 p-2"
              >
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
                      Riwayat permintaan Kuota
                    </div>
                  </button>
                </Tab>
              </Tab.List>
              </div>
              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {/* {active === "permintaan" && <permintaanKuota />} */}
                </Suspense>
                <Suspense fallback="loading ...">
                  {/* {active === "riwayat" && <Riwayatpermintaan />} */}
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
