import { ReactElement } from "react";
import { BaseLayout } from "../../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { AnalysisResultBreadcrumb } from "../const";
import { AnalysisResult } from "./hasil";

export const AnalysisResultModules = (): ReactElement => {
  return (
    <BaseLayout title="Analisis Hasil">
      <BreadCrumb items={AnalysisResultBreadcrumb} bgColor=" bg-grey-100" />
      <AnalysisResult />
    </BaseLayout>
  );
};
