import { FC, Fragment, ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dummyRegisteredSimulation, finishPopupState } from "./store";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { Button } from "@mknows-frontend-services/components/atoms";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { RequestSceduleSuccessModal } from "./modal";

export const HistorySimulation: FC = (): ReactElement => {
  const registeredSimulation = useRecoilValue(dummyRegisteredSimulation);

  const [isShowFinishPopup, setShowFinishPopup] = useRecoilState(finishPopupState);

  return (
    <Fragment>
      {registeredSimulation.map((item, index) => {
        return (
          <section
            key={index}
            className="w-full min-h-[140px] mb-4 bg-neutral-50 shadow-sm hover:shadow-md hover:bg-neutral-100 transition-all ease-in-out duration-150 flex flex-wrap justify-between items-center border-l-[10px] border-version3-500 rounded-md overflow-hidden cursor-pointer"
          >
            <section className="flex items-center bg-neutral-50/0 gap-10 px-4 py-4 rounded-md ">
              <figure className="h-[80px] rounded-md overflow-hidden  w-52 grid place-items-center ">
                <Image
                  src={
                    "https://res.cloudinary.com/dvsqy8n1a/image/upload/v1683630131/sub_thumbnail_eff70dfe-3df7-497f-ab45-2901975024ad.png"
                  }
                  alt="dummy-view"
                  width={100}
                  height={100}
                  className="w-auto h-auto rounded-lg  overflow-hidden "
                  loading="eager"
                />
              </figure>
              <main>
                <h1 className="text-base text-neutral-800 mb-2 font-bold">{item.title}</h1>
                <p className="text-sm text-neutral-500">{item.lecture}</p>
              </main>
            </section>
            <section className="px-4 py-4 flex flex-col items-center gap-2 ">
              {item.status === "finished" ? (
                <div
                  className="flex  w-full items-start lg:items-center flex-col gap-1"
                  onClick={() => {
                    setShowFinishPopup(true);
                  }}
                >
                  <AiFillCheckCircle className="text-xl text-[#3EB449]" />
                  <h1 className="text-sm font-bold text-[#3EB449]">SELESAI</h1>
                </div>
              ) : (
                <Link passHref href={`drill-simulasi/perubahan-jadwal/${item.title}`}>
                  <Button
                    type="button"
                    className="py-2 text-xs font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2  w-[200px] disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
                  >
                    <h1>Ajukan Perubahan Jadwal</h1>
                  </Button>
                </Link>
              )}
              {item?.schedule?.map((item, index) => {
                return (
                  <h1 className="text-sm text-neutral-700" key={index}>
                    {item.time.map((time, index) => {
                      return (
                        <span key={index}>
                          {time.title} | {time.value}
                        </span>
                      );
                    })}
                  </h1>
                );
              })}
            </section>
            <Modal
              withClose={false}
              hasImage={false}
              lookup={isShowFinishPopup}
              onClose={() => {
                setShowFinishPopup(false);
              }}
            >
              <RequestSceduleSuccessModal
                title="Anda Telah Selesai Melakukan Simulasi!"
                type="finished"
              >
                <p className="text-neutral-500 text-sm text-center">
                  Kamu telah melakukan simulasi di tanggal{" "}
                  {item.schedule.map((item, index) => {
                    return (
                      <span key={index} className="font-bold">
                        {item.time.map((time, index) => {
                          return (
                            <span key={index}>
                              {time.title} pukul {time.value}
                            </span>
                          );
                        })}
                      </span>
                    );
                  })}
                </p>
                <section className="w-full flex justify-center pt-4">
                  <Button
                    type="button"
                    onClick={() => {
                      setShowFinishPopup(false);
                    }}
                    className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-2 w-28 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
                  >
                    <h1>Tutup</h1>
                  </Button>
                </section>
              </RequestSceduleSuccessModal>
            </Modal>
          </section>
        );
      })}
    </Fragment>
  );
};
