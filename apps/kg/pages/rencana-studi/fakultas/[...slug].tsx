import type { NextPage } from 'next';
import { lazy, ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BaseLayout } from '../../../modules/common/layout/base/section';
// import StudyProgramSkeleton from "@/components/Loading/StudyPlan/StudyProgramSkeleton";
// import SuspenseError from "@/modules/Common/SuspenseError";

const StudyProgram = lazy(
  () => import('../../../modules/study-plan/StudyProgram')
);

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
