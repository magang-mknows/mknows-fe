import type { NextPage } from "next";
import { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BaseLayout } from "../../../modules/common/layout/base/section";
import { StudyProgram } from "../../../modules";
// import StudyProgramSkeleton from "@/components/Loading/StudyPlan/StudyProgramSkeleton";
// import SuspenseError from "@/modules/Common/SuspenseError";

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      {/* <SuspenseError loadingFallback={<StudyProgramSkeleton />}> */}
      <BaseLayout>
        <StudyProgram />
      </BaseLayout>
      {/* </SuspenseError> */}
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
