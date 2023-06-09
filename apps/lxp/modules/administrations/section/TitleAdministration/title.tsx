import React, { FC, ReactElement } from "react";
import { useGetAllAdministration } from "../../hooks";
import { IoAlertCircleOutline } from "react-icons/io5";

export const TitleAdministration: FC = (): ReactElement => {
  const { data } = useGetAllAdministration();
  return (
    <div className="title  w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left mb-2">Administrasi</h1>
      <section
        className={`${
          data?.data?.status === "PENDING"
            ? " text-neutral-800 bg-version3-400/20"
            : data?.data?.status === "ACCEPTED"
            ? " text-primary-600 bg-primary-100/50"
            : "text-[#ED3768] bg-warning-100/50 "
        } rounded-md w-full px-4 py-2 text-sm flex gap-2 items-center`}
      >
        <IoAlertCircleOutline className="text-lg" />
        <p>
          {data?.data?.status === "PENDING"
            ? "Menunggu Persetujuan Approve"
            : data?.data?.status === "ACCEPTED"
            ? "Selamat administrasi kamu sudah disetujui silahkan dilanjutkan pada halaman rencana pelatihan"
            : "Kamu harus mengisi administrasi untuk bisa mengambil Rencana Pelatihan."}
        </p>
      </section>
    </div>
  );
};
