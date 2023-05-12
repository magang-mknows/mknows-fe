// import GlimpseKnowledgeLayout from '@/modules/glimpse-knowledge/layout';
import { GlimpseKnowledgeLayout } from '../../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const index: NextPage = (): ReactElement => {
  return (
    <div>
      <GlimpseKnowledgeLayout />
    </div>
  );
};

export default index;
