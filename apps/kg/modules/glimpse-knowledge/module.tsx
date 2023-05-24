import { FC, ReactElement } from 'react';
import { GlimpseKnowledgePage } from './component/GlimpseKnowledgePage';
import { BaseLayout } from '../../modules/common';

export const GlimpseKnowledgeModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgePage />
    </BaseLayout>
  );
};
