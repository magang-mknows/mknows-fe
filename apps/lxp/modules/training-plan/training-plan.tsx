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
import Link from "next/link";
import { ContentFooter } from "../common/footer/footer-content";

export const TrainingPlanModule: FC = (): ReactElement => {
  const { data: workplan, isLoading, isError, error } = useCheckWorkPlanStatus();
  const workPlanStatus = workplan?.data?.status;
  const isSeeDeptList = useRecoilValue(seeDepartment);

  return (
    <ClientProvider>
      <BreadCrumb items={TrainingPlanBreadCumbs} textColor="text-version2-400" />
      {isLoading ? (
        <LoadingSpinner />
      ) : isError && error.response?.status === 403 ? (
        <section className="bg-light w-full min-h-screen flex justify-center items-center ">
          <section className="flex items-center justify-center">
            <section className="flex flex-col items-center">
              <h1>Anda belum menyelesaikan proses Administrasi</h1>
              <p>
                Lengkapi administrasi anda{" "}
                <Link href={"/administrasi"} className="font-bold text-blue-500 underline">
                  disini{" "}
                </Link>
              </p>
            </section>
          </section>
        </section>
      ) : (
        <section className="bg-light w-full h-full min-h-screen">
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
      <ContentFooter />
    </ClientProvider>
  );
};
