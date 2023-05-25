import { FC, ReactElement } from "react";
import { DashboardModule } from "../../modules/dashboard";
import { BaseLayout } from "../../modules/common/layout/base";

const DashboardPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Dashboard">
      <section className="h-full flex-col flex bg-neutral-100 w-full">
        <DashboardModule />
      </section>
    </BaseLayout>
  );
};

export default DashboardPage;
