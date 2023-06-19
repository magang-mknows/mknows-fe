import { SidebarAdmin } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement } from "react";
import BaseLayout from "../../components/base";
import { InfoSection } from "./InfoSection";

export const DashboardModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="ml-[42px] mr-[52px]">
        <InfoSection />
      </div>
    </BaseLayout>
  );
};
