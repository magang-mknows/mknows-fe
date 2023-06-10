import { FC, ReactElement } from "react";
import { SubjectDetailsModule } from "../../../../modules/mystudy/subject-details";
import { BaseLayout } from "../../../../modules/common/layout/base";
import { useRouter } from "next/router";

const SubjectDetailsPage: FC = (): ReactElement => {
  const router = useRouter();
  return (
    <BaseLayout title={`${router.query.subjectName}`}>
      <SubjectDetailsModule />
    </BaseLayout>
  );
};

export default SubjectDetailsPage;
