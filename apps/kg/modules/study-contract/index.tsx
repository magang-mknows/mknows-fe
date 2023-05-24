import { FC, Fragment, ReactElement } from "react";
import { BaseLayout } from "../../modules";
import SubmissionContractStudy from "./submissionContractStudy/kontrak"

export const StudyContractModules: FC = (): ReactElement => {
    return (
      <div>
        {/* <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}> */}
        <BaseLayout title="Kontrak KRS">
          <SubmissionContractStudy />
        </BaseLayout>
        {/* </SuspenseError> */}
      </div>
    );
  };