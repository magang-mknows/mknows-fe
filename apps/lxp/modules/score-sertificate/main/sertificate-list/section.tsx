import { FC, Fragment, ReactElement } from "react";
import { SertificateFilter } from "./filter";
import { Sertificate } from "./main";

const SertificateList: FC = (): ReactElement => {
  return (
    <Fragment>
      <SertificateFilter />
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Sertificate />
      </section>
    </Fragment>
  );
};

export default SertificateList;
