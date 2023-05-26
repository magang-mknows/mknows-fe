import { FC } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { ConsultingBreadCumbs } from "./const";
import { ConsultingAndServiceHeader } from "./header";
import { ConsultingAndServiceProduct } from "./product";
import { ConsultingAndServiceQuestion } from "./question";
import { ContentFooter } from "../common/footer/footer-content";

export const ConsultingServiceModule: FC = () => {
  return (
    <ClientProvider>
      <BreadCrumb items={ConsultingBreadCumbs} textColor="text-version2-400" />
      <ConsultingAndServiceHeader />
      <ConsultingAndServiceProduct />
      <ConsultingAndServiceQuestion />
      <ContentFooter />
    </ClientProvider>
  );
};
