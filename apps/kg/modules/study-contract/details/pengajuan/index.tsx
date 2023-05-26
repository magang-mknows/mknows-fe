import { FC, ReactElement } from "react";
import TabelSubmission from "./tabel";
import Alert from "../components/alert";

const Submission: FC = (): ReactElement => {
  return (
    <>
      <Alert detail="Estimasi proses pengajuan adalah maksimal 7 hari" />
      <TabelSubmission />
    </>
  );
};

export default Submission;
