import { FC, ReactElement } from "react";
import { SidebarAdmin } from "@mknows-frontend-services/components/molecules";
import { TBaseLayout } from "./type";

const BaseLayout: FC<TBaseLayout> = ({children}): ReactElement => {
  return <SidebarAdmin contentStyle="bg-[#FAFAFA] w-full">
    {/* belum lengkap */}
    <div className="bg-[#FFFFFF] w-[100%] flex justify-end ml-[8px] py-[11px] pr-[52px] shadow-[0_3px_23px_10px_rgb(150,150,150,0.1)]">
      <div className="rounded-full bg-primary-700 w-[44px] h-[44px]"></div>
    </div>
    <section>{children}</section>
  </SidebarAdmin>;
};

export default BaseLayout;