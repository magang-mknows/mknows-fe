import { SidebarAdmin } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement } from "react";
import BaseLayout from "../../components/base";
import { InfoSection } from "./InfoSection";
import { GrafikSection } from "./GrafikSection";
import { PapanSkorSection} from "./PelatihanSection";

export const DashboardModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="ml-[42px] mr-[52px]">
        <InfoSection />
        <div className="grid grid-cols-2">
          <GrafikSection/>
          <PapanSkorSection/>
        </div>
      </div>
    </BaseLayout>
  );
};
