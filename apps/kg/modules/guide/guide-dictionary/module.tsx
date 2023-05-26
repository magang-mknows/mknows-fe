import { ReactElement } from "react";
import { BaseLayout } from "../../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { guideDictionary } from "./const";
import { Sidebar } from "./sidebar";
import { ContentSection } from "./content";

export const GuideDictionaryModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideDictionary} />
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <Sidebar />
        <ContentSection />
      </div>
    </BaseLayout>
  );
};
