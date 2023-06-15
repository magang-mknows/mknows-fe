import { ReactElement } from "react";
import { BaseLayout } from "../../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { CareerBreadcrumb } from "../const";
import { LandingCareer } from "./landing";

export const CareerPlaningModules = (): ReactElement => {
  return (
    <BaseLayout title="Perencannan Karir">
      <BreadCrumb items={CareerBreadcrumb} bgColor="bg-white" />
      <LandingCareer />
    </BaseLayout>
  );
};
