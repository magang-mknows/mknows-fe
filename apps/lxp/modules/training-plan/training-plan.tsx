import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb, LoadingSpinner } from "@mknows-frontend-services/components/atoms";
import { TrainingPlanBreadCumbs } from "./const";
import { TrainingPlanHeader } from "./header";
import { TrainingPlanMain } from "./main";
import { UnChoosenSection } from "./unchoose";
import { useCheckWorkPlanStatus } from "./hook";
import { useRecoilValue } from "recoil";
import { seeDepartment } from "./store";
import { TakenDepartment } from "./taken";

export const TrainingPlanModule: FC = (): ReactElement => {
  const { data: workplan, isLoading } = useCheckWorkPlanStatus();
  const workPlanStatus = workplan?.data?.status;
  const isSeeDeptList = useRecoilValue(seeDepartment);

  return (
    <ClientProvider>
      <BreadCrumb items={TrainingPlanBreadCumbs} textColor="text-version2-400" />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="bg-[#FAFAFA]  w-full h-full">
          {!workPlanStatus && !isSeeDeptList ? (
            <UnChoosenSection />
          ) : (
            <>
              <TrainingPlanHeader />
              {!workPlanStatus ? <TrainingPlanMain /> : <TakenDepartment />}
            </>
          )}
        </section>
      )}
    </ClientProvider>
  );
};
