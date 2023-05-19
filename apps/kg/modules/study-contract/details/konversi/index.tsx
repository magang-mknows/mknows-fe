import { FC, ReactElement } from "react";
import TabelPretest from "./tabel";
import Alert from "../components/alert";

export const PreTest: FC = (): ReactElement => {
  return (
    <>
      <Alert detail="Silahkan upload bukti telah pernah mengikuti mata kuliah dibawah ini agar bisa dikonversi" />
      <TabelPretest />
    </>
  );
};
