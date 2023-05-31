import { FC, ReactElement, useEffect } from "react";
import {
  usePrivateInformationStatus,
  useJobInformationStatus,
  useFileInformationStatus,
} from "./hooks";
import { BiCheck } from "react-icons/bi";
import { useGetAllAdministration } from "../hooks";

export const Stepper: FC = (): ReactElement => {
  const { getPrivateStatus, setPrivateStatus } = usePrivateInformationStatus();
  const { getJobStatus, setJobStatus } = useJobInformationStatus();
  const { getFileStatus, setFileStatus } = useFileInformationStatus();
  const { data } = useGetAllAdministration();
  const getAll = data?.data;
  console.log("cek all adm: ", getAll);
  useEffect(() => {
    if (getAll?.biodata === null && getAll?.familial === null && getAll?.file === null) {
      setPrivateStatus(false);
      setJobStatus(false);
      setFileStatus(false);
    }
  }, [data]);

  return (
    <div className="flex justify-center mt-[48px] mb-[40px]">
      <section className="flex flex-col justify-center items-center gap-y-2 relative mr-2 lg:mr-14">
        <span
          className={`${
            getPrivateStatus ? "border-success-500 bg-success-500" : "border-[#9CA3AF] bg-white"
          } h-7 w-7  flex justify-center items-center rounded-full border-2  relative`}
        >
          {getPrivateStatus ? (
            <BiCheck color="white" />
          ) : (
            <span className="  bg-[#9CA3AF] h-2 w-2 block rounded-full"></span>
          )}
          <section
            className={` ${
              getPrivateStatus ? "bg-success-500" : "bg-[#9CA3AF]/50"
            } h-[2px] w-24 lg:w-36  absolute left-[25px]`}
          >
            {getPrivateStatus && (
              <span className="text-sm text-success-500 font-normal absolute left-6 lg:left-14 bottom-2">
                30%
              </span>
            )}
          </section>
        </span>
        <h1 className="md:text-xs text-[10px] text-center">Informasi Pribadi</h1>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-2 relative mr-2 lg:mr-14">
        <span
          className={`${getPrivateStatus ? "border-success-500" : "border-[#9CA3AF]"} ${
            getJobStatus ? "bg-success-500" : "bg-white"
          } h-7 w-7  flex justify-center items-center rounded-full border-2   relative`}
        >
          {getJobStatus ? (
            <BiCheck color="white" />
          ) : (
            <span
              className={`${
                getPrivateStatus ? "bg-success-500" : "bg-[#9CA3AF]"
              }  h-2 w-2 block rounded-full`}
            ></span>
          )}
          <section
            className={`${
              getJobStatus ? "bg-success-500" : "bg-[#9CA3AF]/50"
            } h-[2px] w-24 lg:w-36  absolute left-[25px]`}
          >
            {getJobStatus && (
              <span className="text-sm text-success-500 font-normal absolute left-6 lg:left-14 bottom-2">
                80%
              </span>
            )}
          </section>
        </span>
        <h1 className="md:text-xs text-[10px] text-center">Informasi Pekerjaan</h1>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-2 relative">
        <span
          className={`${getJobStatus ? "border-success-500" : "border-[#9CA3AF]"} ${
            getFileStatus ? "bg-success-500" : "bg-white"
          } h-7 w-7  flex justify-center items-center rounded-full border-2   relative`}
        >
          {getFileStatus ? (
            <BiCheck color="white" />
          ) : (
            <span
              className={`${
                getJobStatus ? "bg-success-500" : "bg-[#9CA3AF]"
              }  h-2 w-2 block rounded-full`}
            ></span>
          )}
          {getFileStatus && (
            <p className="text-sm text-success-500 font-normal absolute left-12 bottom-1">100%</p>
          )}
        </span>
        <h1 className="md:text-xs text-[10px] text-center">Informasi Berkas</h1>
      </section>
    </div>
  );
};
