import { FC, ReactElement } from "react";
import { useGetMyStudy } from "./hooks";
import { MajorSection } from "./major";
import { TDataMajor, TDataSubject } from "./types";
import { SubjectSection } from "./subject";

export const MyStudyModule: FC = (): ReactElement => {
  const { data } = useGetMyStudy();
  const dataMajorProps = data?.data.dataMajor;
  const dataSubjectProps = data?.data.dataSubjects;

  return (
    <div className="w-full">
      <MajorSection {...(dataMajorProps as TDataMajor)} />
      <SubjectSection dataSubjectProps={dataSubjectProps as Array<TDataSubject>} />
    </div>
  );
};
