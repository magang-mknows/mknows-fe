import { FC, ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "@mknows-frontend-services/components/atoms";
import Sidebar from "../../components/organisms/sidebar";
import SidebarSkeleton from "../../components/organisms/sidebar/sidebar-skeleton";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row h-auto min-h-screen w-screen">
        <div className="fixed z-[99999]">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>
        </div>
        <div className="w-full lg:ml-[20%] ml-0 overflow-hidden p-4 max-screen-auto bg-white">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
