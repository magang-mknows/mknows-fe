import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";
import LoadingRequest from "../../modules/request/loading";
import AlokasiKuota from "./alocation-quota";
import RiwayatAlokasi from "./history-alocation";

const QuotaPage: FC = (): ReactElement => {
  const [active, setActive] = useState("alokasi");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("tab") === "alokasi") {
      setActive("alokasi");
    }
    if (query.get("tab") === "riwayat") {
      setActive("riwayat");
    }
  }, []);
  return (
    <Suspense fallback={<LoadingRequest />}>
      <Tab.Group>
        <section className="w-full flex h-fit relative py-2 justify-center lg:justify-end lg:pr-4">
          <CardCS className="w-full h-fit rounded-lg bg-white">
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
                      onClick={() => {
                        navigate("/dashboard/quota?tab=alokasi", { replace: true });
                        setActive("alokasi");
                      }}
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
                      onClick={() => {
                        navigate("/dashboard/quota?tab=riwayat", { replace: true });
                        setActive("riwayat");
                      }}
                    >
                      Riwayat Alokasi Kuota
                    </div>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {active === "alokasi" && <AlokasiKuota />}
                </Suspense>
                <Suspense fallback="loading ...">
                  {active === "riwayat" && <RiwayatAlokasi />}
                </Suspense>
              </Tab.Panels>
            </div>
          </CardCS>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default QuotaPage;
