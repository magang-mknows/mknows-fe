import { FC, Fragment, ReactElement } from 'react';
import SubmissionContractStudy from './submissionContractStudy/kontrak';

export const StudyContractModules: FC = (): ReactElement => {
  return (
    /* <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}> */

    <SubmissionContractStudy />
  );

  /* </SuspenseError> */
};
