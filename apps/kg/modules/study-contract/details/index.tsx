import { FC, ReactElement, lazy, Suspense, useState } from "react";
import { BaseLayout } from "../../../modules/common/layout/base";
// import { contractStudyBreadCumbs } from "@/utilities/constant";
import { usePopupAddStudy, usePopupSucces } from "./hooks";
import { Contract } from "./kontrak-krs";
import { Draft } from "./draft-krs";
import { PreTest } from "./konversi";
import Submission from "./pengajuan";
import { MainLayouts } from "./components/layout";

// import Loading from "@/components/Loading";

// const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const DetailContract: FC = (): ReactElement => {
  const [active, setactive] = useState("kontrak-krs");
  const { setPopupAdd } = usePopupAddStudy();
  const { setPopupSuccess } = usePopupSucces();
  const moveKRS = (): void => {
    setactive("draft-krs");
    setPopupAdd(false);
  };
  const moveKonversi = (): void => {
    setactive("konversi");
    setPopupSuccess(false);
  };
  return (
    <BaseLayout>
      {/* <Suspense fallback={<Loading />}>
        <BreadCrumbs items={contractStudyBreadCumbs} /> */}
        <MainLayouts className="bg-[#FAFAFA]">
          <div className="flex flex-col p-4 gap-4">
            <h1 className="text-[#737373] text-[18px] text:lg">Teknik Informatika</h1>
            <p className="text-[20px] font-semibold">Software Engineering</p>
          </div>

          <div>
            <div className="bg-white h-full rounded-[8px] dark:bg-[#1f2937] ">
              <div className="text-[18px] font-semibold text-center text-[#9ca3af] border-b border-[#e5e7eb] px-[26px] mb-10">
                <ul className="flex flex-wrap ">
                  <li className="mr-2">
                    <button>
                      <a
                        className={`inline-block p-4 ${
                          active == "kontrak-krs"
                            ? "text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2"
                            : ""
                        }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white  `}
                        aria-current="page"
                        onClick={() => setactive("kontrak-krs")}
                      >
                        Kontrak KRS
                      </a>
                    </button>
                  </li>
                  <li className="mr-2">
                    <button>
                      <a
                        className={`inline-block p-4 ${
                          active == "draft-krs"
                            ? "text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2"
                            : ""
                        }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-white `}
                        aria-current="page"
                        onClick={() => setactive("draft-krs")}
                      >
                        Draft KRS
                      </a>
                    </button>
                  </li>
                  <li className="mr-2">
                    <button>
                      <a
                        className={`inline-block p-4 ${
                          active == "konversi"
                            ? "text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2"
                            : ""
                        }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white  `}
                        aria-current="page"
                        onClick={() => setactive("konversi")}
                      >
                        Konversi
                      </a>
                    </button>
                  </li>
                  <li className="mr-2">
                    <button>
                      <a
                        className={`inline-block p-4 ${
                          active == "pengajuan"
                            ? "text-[#0B568D] border-[#ffff] dark:text-[#ffff] dark:border-[#ffff] border-b-2"
                            : ""
                        }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white `}
                        aria-current="page"
                        onClick={() => setactive("pengajuan")}
                      >
                        Pengajuan
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {active === "kontrak-krs" ? (
                <Contract onClick={() => moveKRS()} onMove={() => moveKonversi()} />
              ) : active === "draft-krs" ? ( 
                <Draft />
              ) : active === "konversi" ? (
                <PreTest />
              ) : active === "pengajuan" ? ( 
                <Submission />
              ) : (
                <span>Tidak ada data</span>
              )}
            </div>
          </div>
        </MainLayouts>
      {/* </Suspense> */}
    </BaseLayout>
  );
};

export default DetailContract;
