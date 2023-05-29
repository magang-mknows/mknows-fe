import { lazy, FC, ReactElement } from "react";

const EditData = lazy(() => import("../../modules/user/edit-data/edit-data"));

const EditDataPage: FC = (): ReactElement => {
  return <EditData />;
};

export default EditDataPage;
