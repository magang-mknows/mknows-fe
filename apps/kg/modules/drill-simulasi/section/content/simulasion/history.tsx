import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import Done from "../../../assets/assigned-done.svg";
import drillDummy from "../../../assets/dummy-drill.svg";
import simulasiDone from "../../../assets/dummy-success.svg";
import simulasiChecked from "../../../assets/simulasi-checked.svg";
import { useGetHistorySimulation, usePopupSubmissionStatus } from "../../../hooks";
import { PopupModal } from "@mknows-frontend-services/components/molecules";
import { THistoryItem } from "../../../type";

export const HistorySimulasion: FC = (): ReactElement => {
  const { data } = useGetHistorySimulation();
  const getHistory = data?.data;
  console.log("history: ", getHistory);
  const { setPopupStatus, getPopupStatus } = usePopupSubmissionStatus();

  return (
    <div className="md:px-6 py-0 mb-20">
      <>
        {getHistory?.map((items: THistoryItem, i: any) => {
          return (
            <>
              <div
                key={i}
                className={`flex flex-col md:flex-row bg-white rounded-lg drop-shadow-lg relative justify-between  mb-5 md:items-center lg:py-3 ${
                  items.status === "FINISHED" ? "cursor-pointer" : ""
                }`}
                onClick={
                  items.status === "FINISHED"
                    ? () => setPopupStatus(true)
                    : () => setPopupStatus(false)
                }
              >
                <div
                  className={`flex absolute -left-0 top-0 rounded-tl-lg rounded-bl-lg h-full w-2 ${
                    items.status === "FINISHED" ? "bg-success-500" : "bg-yellow-500"
                  }`}
                />
                <div className="flex lg:flex-row flex-col items-center ">
                  <Image
                    alt="Image"
                    src={drillDummy}
                    className="md:w-[217px] w-max object-contain md:ml-10 mx-auto mt-5 lg:mt-0 rounded-[8px]"
                  />
                  <div className="banner md:px-8 px-5 md:py-6 py-4">
                    <h1 className="md:text-[20px] text-[18px] font-[700] dark:text-white text-neutral-800">
                      {items.topic}
                    </h1>
                    <p className="text-neutral-base font-[400] md:text-[16px] text-[14px] lg:mt-3 md:mt-2 mt-0">
                      {items.assessor_name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-center items-start mr-6 md:mr-0 md:px-8 px-5 mb-7 md:py-0 md:mt-3">
                  {items.status === "FINISHED" ? (
                    <div className="flex md:flex-col flex-row gap-3 md:gap-0 items-center ">
                      <Image alt="Image" src={Done} className="md:mt-3 mt-0 md:w-[21px] w-[19px]" />

                      <p className="md:text-[16px] text-[14px] font-[600] text-success-500">
                        Selesai
                      </p>
                    </div>
                  ) : (
                    <Link href={`/simulasi-drill-dan-assestment/perubahan-jadwal/${items.topic}`}>
                      <button className="bg-yellow-500 text-white md:text-[14px] text-[12px] font-[600] rounded-[8px] px-4 py-2 md:w-[230px] w-[200px] md:h-[36px] h-[30px] md:mt-3 mt-0">
                        Ajukan Perubahan Jadwal
                      </button>
                    </Link>
                  )}

                  <div className="flex flex-row text-neutral-800  md:text-[16px] text-[14px] font-[400] mt-2  ">
                    <p>{items?.picked_schedule?.slice(0, 10)}</p>
                    <p className="px-2">|</p>
                    <p>{items?.picked_schedule?.slice(11, 16)}</p>
                  </div>
                </div>
              </div>
              <div>
                <PopupModal
                  icon={simulasiChecked}
                  image={simulasiDone}
                  stylePopup={"font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]"}
                  lookup={getPopupStatus}
                  className="!h-85 w-[100%] text-md py-10"
                  onClose={() => setPopupStatus(false)}
                >
                  <center>
                    <Image className="-mt-10" src={simulasiDone} alt="done" />
                  </center>
                  <p className="text-black font-[700] lg:text-[20px] md:text-[18px]">
                    Anda Telah Selesai Melakukan Simulasi!
                    <p className=" text-neutral-base font-[600] text-[20px]">
                      Kamu telah melakukan simulasi di hari
                      <span className="text-neutral-500 ">
                        {" "}
                        {new Date(items.picked_schedule).toString().slice(0, 15)} Pukul{" "}
                        {items.picked_schedule.slice(11, 16)} WIB
                      </span>
                    </p>
                  </p>
                </PopupModal>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};
