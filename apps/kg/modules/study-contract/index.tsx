import { FC, Fragment, ReactElement } from "react";
import { BaseLayout } from "../../modules";
import SubmissionContractStudy from "./submissionContractStudy/kontrak"

export const StudyContractModules: FC = (): ReactElement => {
    return (
      <div>
        {/* <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}> */}
        <BaseLayout title="Semua Fitur">
          <SubmissionContractStudy />
        </BaseLayout>
        {/* </SuspenseError> */}
      </div>
    );
  };