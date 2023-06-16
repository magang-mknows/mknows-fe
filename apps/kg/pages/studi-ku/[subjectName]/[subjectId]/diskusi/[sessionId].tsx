import { FC, ReactElement } from "react";
import { DiscussionMyStudyModule } from "../../../../../modules/mystudy/discussion";
import { BaseLayout } from "../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";

const MyStudyDiscussionPage: FC = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({ router, competencyDetailsName: "Diskusi" });

  return (
    <BaseLayout title="Diskusi Mata Kuliah">
      <BreadCrumb items={items} bgColor="bg-white" />
      <DiscussionMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyDiscussionPage;
