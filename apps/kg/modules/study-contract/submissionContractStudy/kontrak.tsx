import { FC, ReactElement } from "react";
import Confirm from "./asset/Confirm.svg";
import { Button } from "@mknows-frontend-services/components/atoms";
import { PopupModal } from "@mknows-frontend-services/components/molecules";
import Image from "next/image";
// import GlobalButton from "../Common/GlobalButton";
import {GlobalButton} from "@mknows-frontend-services/components/molecules";
import { useDataTable } from "./hook";
import { useDataCard } from "./hook";
import Download from "./asset/download1.svg";
import Warning from "./asset/warning.svg";
import { usePopupConfirmCardStudy } from "./hook";
// import SuspenseError from "@/modules/Common/SuspenseError";
// import Loading from "../Loading";

const SubmissionContractStudy: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { getDataCard } = useDataCard();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();

  return (
    <div className="flex flex-col w-full lg:px-16 px-0 py-6">
      <div className="flex p-8 py-4 w-[100%]">
        <div className="flex flex-col py-4 pb-4">
          <div className="flex gap-6">
            <h1 className="flex lg:text-2xl text-xl justify-center items-center font-semibold">
              Pengajuan Kartu Rencana Study
            </h1>
            <div>
              <GlobalButton
                className="text-center lg:!w-44 !w-36 lg:!h-14 !h-10 lg:text-lg text-md py-4 bg-[#3EB449]"
                text="+ Mengajukan"
                onClick={() => setPopupStatus(true)}
                hasImg={false}
              />
            </div>
          </div>
          {/*isi span dari API */}
          {getDataCard.map((x, i) => (
            <p key={i} className="flex lg:text-xl py-2 text-md">
              <div className="flex w-full jutify-start">
                <span>{x.label}</span>
              </div>
              <div className="flex w-full justify-start items-start">
                <span> : {x.desc}</span>
              </div>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center ">
        <GlobalButton
          className="lg:text-center text-start text-md mx-4 lg:ml-80 "
          size="regular"
          color="greenBorder"
          text="Download Silabus"
          hasImg={true}
          icon={Download}
        />
      </div>
      <div className="px-4 mx-auto md:w-full">
        <div className="my-6 flex mx-4">
          <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-3 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Mata</p>
              <p> Kuliah</p>
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Kode </p>
              <p>Matkul</p>
            </div>
            <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
              SKS
            </div>
            <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
              Semester
            </div>
            <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Jumlah</p>
              <p>Pertemuan</p>
            </div>

            {getDataTable.map((x, i) => (
              <>
                <div
                  key={i}
                  className="p-3 text-center border-t border-[#E5E5E5] dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px]"
                >
                  {x.no}
                </div>
                <div className="border-t border-[#E5E5E5] dark:divide-gray-700 col-span-3 lg:text-[16px] md:text-[16px] text-[12px]">
                  <div className="lg:flex lg:justify-center w-full lg:gap-4 p-4">
                    <Image src={x.img} alt="User" />
                    <div className="flex w-full flex-col w-auto">
                      <h1 className="pt-3 font-bold text-start ">{x.matkul}</h1>
                      <p className="pt-3 text-gray-400 text-start">{x.jmlh_mahasiswa}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                  {x.kode_matkul}
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                  {x.jmlh_sks} SKS
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                  {x.semester}
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                  {x.jmlh_pertemuan} Pertemuan
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* <SuspenseError loadingFallback={<Loading />}> */}
        <PopupModal
          onClose={() => setPopupStatus(false)}
          icon={Confirm}
          popupTitle="Konfirmasi"
          lookup={getPopupStatus}
          className="!h-80 lg:!w-[100%] text-md py-10"
        >
          <h1 className="py-2">
            Kamu akan mengajukan program study{" "}
            <span className="font-bold">Software Engineering</span>
          </h1>
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <div className="flex gap-2">
              <Image src={Warning} alt="warning" />
              <span className="block sm:inline">
                Kamu tidak dapat mengganti Program Studi yang telah dipilih
              </span>
            </div>
          </div>
          <div className="flex gap-3 my-2 py-4">
            {/* <Button
              text="Batal"
              className="lg:w-[230px] lg:h-[56px] w-[100px] h-[56px] h border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => setPopupStatus(false)}
              type={"button"}
            />
            <Button
              className="lg:w-[230px] lg:h-[56px] w-[110px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={"button"}
              text="Konfirmasi"
              page={"/kontrak-krs/detail"}
            /> */}
          </div>
        </PopupModal>
      {/* </SuspenseError> */}
    </div>
  );
};

export default SubmissionContractStudy;

