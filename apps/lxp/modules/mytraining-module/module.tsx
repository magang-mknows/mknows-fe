import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingModuleBreadCumbs } from "./const";
import { MtTrainingModuleMain } from "./main";
import { ContentFooter } from "../common/footer/footer-content";
import { useRouter } from "next/router";
import { useGetMyWorkCourse } from "../mytraining-course/hooks";
import { params } from "../mytraining-course/type";

export const MyTrainingModulModules: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: params = {
    subjectID: query.subjectID as string,
    lastSession: query.lastSession as string,
    batchID: query.batchID as string,
  };

  const { data } = useGetMyWorkCourse(params);
  return (
    <ClientProvider>
      <BreadCrumb
        items={myTrainingModuleBreadCumbs(data?.data?.dataSubject?.name)}
        textColor="text-version2-400"
      />
      <MtTrainingModuleMain />
      <ContentFooter />
    </ClientProvider>
  );
};
