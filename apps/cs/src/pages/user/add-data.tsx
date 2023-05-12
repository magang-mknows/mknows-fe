import { lazy, FC, ReactElement } from 'react';

const AddData = lazy(() => import('../../modules/user/add-data/add-data'));

const AddDataPage: FC = (): ReactElement => {
  return <AddData />;
};

export default AddDataPage;
