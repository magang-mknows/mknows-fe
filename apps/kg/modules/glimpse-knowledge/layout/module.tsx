import { FC, ReactElement } from "react";
import GlimpseKnowledgeLayoutPage from "./GlimpseKnowledgeLayoutPage";
import { BaseLayout } from "../../../modules/common";

export const GlimpseKnowledgeLayout: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgeLayoutPage />
    </BaseLayout>
  );
};
