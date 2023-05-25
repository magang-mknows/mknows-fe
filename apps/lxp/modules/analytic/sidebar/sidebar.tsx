import { FC, ReactElement } from "react";
import { SidebarHeader } from "./header";
import { SidebarContent } from "./content";

export const SidebarSection: FC = (): ReactElement => {
  return (
    <aside className="col-span-3 h-fit lg:col-span-1 bg-neutral-50 w-full py-20">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  );
};
