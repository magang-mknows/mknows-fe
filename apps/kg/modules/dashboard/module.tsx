import { FC, Fragment, ReactElement, useEffect } from "react";
import { ContentSection } from "./content";
import { SidebarSection } from "./sidebar";
import { useDashboardData, useGetDashboard } from "./hooks";
import { TDashboardItem } from "./types";

export const DashboardModule: FC = (): ReactElement => {
  const { data } = useGetDashboard();
  const { getDashboardData, setDashboardData } = useDashboardData();

  useEffect(() => {
    setDashboardData(data?.data as TDashboardItem);
  }, [setDashboardData]);

  console.log("dashboard data: ", getDashboardData);

  return (
    <Fragment>
      <main className="py-2 bg-neutral-50 min-h-[220vh] w-full overflow-hidden">
        <div className="grid grid-cols-3 gap-x-10 px-6 md:px-8 lg:px-10">
          <SidebarSection />
          <ContentSection />
        </div>
      </main>
    </Fragment>
  );
};
