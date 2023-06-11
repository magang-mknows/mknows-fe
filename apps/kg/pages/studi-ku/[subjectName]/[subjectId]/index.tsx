import { FC, ReactElement } from "react";
import { SubjectDetailsModule } from "../../../../modules/mystudy/subject-details";
import { BaseLayout } from "../../../../modules/common/layout/base";
import { useRouter } from "next/router";
import { useMyStudyBreadCrumbsItems } from "../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const SubjectDetailsPage: FC = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    subjectName: router.query.subjectName as string,
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title={`${router.query.subjectName}`}>
      <BreadCrumb items={items} />
      <SubjectDetailsModule />
    </BaseLayout>
  );
};

export default SubjectDetailsPage;
