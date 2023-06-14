import { FC, ReactElement } from "react";
import Confirm from "../assets/Confirm.svg";
import { Button } from "@mknows-frontend-services/components/atoms";
import { PopupModal } from "@mknows-frontend-services/components/molecules";
import Image, { StaticImageData } from "next/image";
import { useDataTable, useKrsById } from "./hook";
import { useDataCard } from "./hook";
import Download from "../assets/download1.svg";
import Warning from "../assets/warning.svg";
import { usePopupConfirmCardStudy } from "./hook";
import { useRouter } from "next/router";

const SubmissionContractStudy: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();

  const router = useRouter();
  const { matkul } = router.query;
  const { data } = useKrsById(matkul as string);
  const contractData = data?.data;
  console.log(data);

  return (
    <div className="flex flex-col w-full px-0 py-6 lg:px-16">
      <div className="flex p-8 py-4 w-[100%]">
        <div className="flex flex-col py-4 pb-4">
          <div className="flex gap-6">
            <h1 className="flex items-center justify-center text-xl font-semibold lg:text-2xl">
              Pengajuan Kartu Rencana Study
            </h1>
            <div>
              <Button
                className="text-center lg:!w-44 !w-36 lg:h-[48px] !h-10 text-[16px]  bg-[#3EB449] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] rounded-lg"
                onClick={() => setPopupStatus(true)}
                type={"button"}
                href={`${matkul}/detail`}
              >
                + Mengajukan
              </Button>
            </div>
          </div>
          {/*isi span dari API */}
          {/* {getDataCard.map((x, i) => (
            <p key={i} className="flex py-2 lg:text-xl text-md">
              <div className="flex w-full jutify-start">
                <span>{x.label}</span>
              </div>
              <div className="flex items-start justify-start w-full">
                <span> : {x.desc}</span>
              </div>
            </p>
            
          ))} */}
          <p className="flex py-2 lg:text-xl text-md">
            <div className="flex w-full jutify-start">
              <span>Program Studi</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : desc</span>
            </div>
          </p>
          <p className="flex py-2 lg:text-xl text-md">
            <div className="flex w-full jutify-start">
              <span>Semester Saat Ini</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : desc</span>
            </div>
          </p>
          <p className="flex py-2 lg:text-xl text-md">
            <div className="flex w-full jutify-start">
              <span>Total SKS</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : desc</span>
            </div>
          </p>
          <p className="flex py-2 lg:text-xl text-md">
            <div className="flex w-full jutify-start">
              <span>Kepala Prodi</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : desc</span>
            </div>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <Button
          className="flex gap-x-2 rounded justify-center items-center hover:opacity-50 duration-1000 lg:text-center text-start text-md mx-8 px-3 lg:ml-80 w-full lg:w-[200px] lg:h-[48px] !h-10 text-[14px] font-normal bg-transparent text-[#3EB449] border-[#3EB449] border-2 disabled:text-[#A3A3A3] disabled:border-[#A3A3A3]"
          type={"button"}
        >
          <Image width={30} height={30} alt="download" src={Download as StaticImageData} />
          Download Silabus
        </Button>
      </div>
      <div className="px-4 mx-auto md:w-full">
        <div className="flex mx-4 my-6">
          <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="bg-[#f3f4f6] text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-3 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Mata</p>
              <p> Kuliah</p>
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Kode </p>
              <p>Matkul</p>
            </div>
            <div className="bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
              SKS
            </div>
            <div className="bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
              Semester
            </div>
            <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Jumlah</p>
              <p>Pertemuan</p>
            </div>

            {contractData?.dataSubjects.map((x, i) => {
              const index = 1 + i;
              const grey = "bg-[#F5F5F5]";
              return (
                <>
                  <div
                    key={i}
                    className={`${
                      i % 2 != 0 && grey
                    } p-3 text-center dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px]`}
                  >
                    {index}
                  </div>
                  <div
                    className={`${
                      i % 2 != 0 && grey
                    } dark:divide-gray-700 col-span-3 lg:text-[16px] md:text-[16px] text-[12px]`}
                  >
                    <div className="w-full p-4 lg:flex lg:justify-center lg:gap-4">
                      <Image src={Download} alt="User" />
                      <div className="flex flex-col w-full">
                        <h1 className="pt-3 font-bold text-start ">{x.name}</h1>
                        <p className="pt-3 text-gray-400 text-start">
                          {x.enrolled_count} Mahasiswa Terdaftar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      i % 2 != 0 && grey
                    } pt-3 dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center`}
                  >
                    {x.subject_code}
                  </div>
                  <div
                    className={`${
                      i % 2 != 0 && grey
                    } pt-3 dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center`}
                  >
                    {x.credit} SKS
                  </div>
                  <div
                    className={`${
                      i % 2 != 0 && grey
                    } pt-3 dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center`}
                  >
                    {x.current_semester}
                  </div>
                  <div
                    className={`${
                      i % 2 != 0 && grey
                    } pt-3 dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center`}
                  >
                    {x.session_count} Pertemuan
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionContractStudy;
