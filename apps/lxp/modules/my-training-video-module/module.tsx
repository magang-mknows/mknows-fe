import React, { Fragment, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import ContentSection from "./section/ContentSection";
import { myTrainingModuleBreadCumbs } from "../mytraining-module/const";
import { ClientProvider } from "../common/provider";
import { useRouter } from "next/router";
import { params } from "../mytraining-course/type";
import { useGetMyWorkCourse } from "../mytraining-course/hooks";

export const MyTrainingVideoModule = (): ReactElement => {
  const { query } = useRouter();
  const params: params = {
    subjectID: query.subjectID as string,
    lastSession: query.lastSession as string,
    batchID: query.batchID as string,
  };

  const { data } = useGetMyWorkCourse(params);
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingModuleBreadCumbs(data?.data?.dataSubject?.name)} />
      <ContentSection />
    </ClientProvider>
  );
};
