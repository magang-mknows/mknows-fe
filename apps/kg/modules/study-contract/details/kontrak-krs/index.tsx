import { FC, ReactElement } from "react";
import TabelDetailContract from "./tabel";
import { moveProps } from "../type";
import Alert from "../components/alert";

export const Contract: FC<moveProps> = ({ onClick, onMove }): ReactElement => {
  return (
    <>
      <Alert detail="KRS yang ditambahkan dapat dilihat pada tab Draft KRS" />
      <TabelDetailContract onClick={onClick} onMove={onMove} />
    </>
  );
};
