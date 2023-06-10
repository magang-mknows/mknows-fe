import { BaseLayout } from "../../modules";
import { MyStudyModule } from "../../modules/mystudy";
import { NextPage } from "next";
import { ReactElement } from "react";

const MyStudyPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Studi-ku">
      <MyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyPage;
