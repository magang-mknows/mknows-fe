import React, { FC, ReactElement } from "react";
import { useGetAllAdministration } from "../../hooks";

export const TitleAdministration: FC = (): ReactElement => {
  const { data } = useGetAllAdministration();
  return (
    <div className="title  w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left mb-2">Administrasi</h1>
      <p
        className={`${
          data?.data?.status === "PENDING"
            ? " text-[#0000]"
            : data?.data?.status === "ACCEPTED"
            ? " text-primary-600"
            : "text-[#ED3768]"
        } `}
      >
        {data?.data?.status === "PENDING"
          ? "Menunggu Persetujuan Approve"
          : data?.data?.status === "ACCEPTED"
          ? "Selamat administrasi kamu sudah disetujui silahkan dilanjutkan pada halaman rencana pelatihan"
          : "Kamu harus mengisi administrasi untuk bisa mengambil Rencana Pelatihan."}
      </p>
    </div>
  );
};
