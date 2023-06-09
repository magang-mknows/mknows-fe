import { useGetAllAdministration } from "../hooks";
import React, { FC, ReactElement } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { AdministrationStatus } from "../enum";

export const TitleAdministration: FC = (): ReactElement => {
  const { data } = useGetAllAdministration();
  const getAdministrationStatus = data?.data;

  return (
    <div className="title lg:px-20 px-5 w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left mb-7">Administrasi</h1>
      <div
        className={`${
          getAdministrationStatus?.status === AdministrationStatus.NotSubmitted
            ? "bg-yellow-100"
            : "bg-primary-100"
        } w-full flex items-center gap-x-4 px-4 py-2.5 rounded-lg`}
      >
        <RiErrorWarningFill
          className={`${
            getAdministrationStatus?.status === AdministrationStatus.NotSubmitted
              ? "text-yellow-500"
              : "text-primary-500"
          } `}
        />
        <p
          className={`${
            getAdministrationStatus?.status === AdministrationStatus.NotSubmitted
              ? "text-yellow-500"
              : "text-primary-500"
          } `}
        >
          {getAdministrationStatus?.status === AdministrationStatus.Pending
            ? "Menunggu Persetujuan Approve"
            : "Kamu harus mengisi administrasi untuk bisa mengambil rencana studi."}
        </p>
      </div>
    </div>
  );
};
