import type { NextPage } from 'next';
import { lazy, ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BaseLayout } from '../../../modules/common/layout/base/section';
import { SubmissionContractStudy } from '../../../modules';
// import StudyProgramSkeleton from "@/components/Loading/StudyPlan/StudyProgramSkeleton";
// import SuspenseError from "@/modules/Common/SuspenseError";

const SubmissionContractPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayout>
        <SubmissionContractStudy />
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default SubmissionContractPage;
