import { NextPage } from 'next';
import { UniqueEventModule } from '../../../modules';
import { ReactElement } from 'react';
import {UniqueEventDetailModule} from '../../../modules';

const UniqueEventDetailPage: NextPage = (): ReactElement => {
  return <UniqueEventDetailModule />;
};

export default UniqueEventDetailPage;
