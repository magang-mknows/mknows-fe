// import GlimpseKnowledgeModule from '@/modules/glimpse-knowledge';
import { GlimpseKnowledgeModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const index: NextPage = (): ReactElement => {
  return (
    <div>
      <GlimpseKnowledgeModule />
    </div>
  );
};

export default index;
