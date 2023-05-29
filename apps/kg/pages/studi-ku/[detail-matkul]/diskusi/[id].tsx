import { FC, ReactElement } from "react";
import { DiscussionMyStudyModule } from "../../../../modules/mystudy/discussion";
import { BaseLayout } from "../../../../modules/common/layout/base";

const MyStudyDiscussionPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Diskusi Mata Kuliah">
      <DiscussionMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyDiscussionPage;
