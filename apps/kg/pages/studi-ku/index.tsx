import { NextPage } from "next";
import { ReactElement } from "react";
import { BaseLayout } from "../../modules";
import { MyStudyModule } from "../../modules/mystudy";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useMyStudyBreadCrumbsItems } from "../../modules/mystudy/common/hooks";

const MyStudyPage: NextPage = (): ReactElement => {
  const { items } = useMyStudyBreadCrumbsItems({});

  return (
    <BaseLayout title="Studi-ku">
      <BreadCrumb items={items} />
      <MyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyPage;
