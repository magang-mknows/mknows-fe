import { FC, Fragment, ReactElement } from "react";
import { useGetMyStudy } from "./hooks";
import { MajorSection } from "./major";
import { TDataMajor, TDataSubject } from "./types";
import { SubjectSection } from "./subject";
import Image from "next/image";
import OrangBingungIcon from "./assets/orang-bingung.svg";

export const MyStudyModule: FC = (): ReactElement => {
  const { data } = useGetMyStudy();
  const dataMajorProps = data?.data.dataMajor;
  const dataSubjectProps = data?.data.dataSubjects;

  return (
    <div className="w-full">
      {dataMajorProps && dataSubjectProps && dataSubjectProps.length > 0 ? (
        <Fragment>
          <MajorSection {...(dataMajorProps as TDataMajor)} />
          <SubjectSection dataSubjectProps={dataSubjectProps as Array<TDataSubject>} />
        </Fragment>
      ) : (
        <div className="w-fit m-auto">
          <Image src={OrangBingungIcon} alt="simulasi-null" />
          <h1 className="text-xl font-bold text-center">Tidak Ada Data Mata Kuliah</h1>
        </div>
      )}
    </div>
  );
};
