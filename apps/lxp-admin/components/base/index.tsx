import { FC, ReactElement } from "react";
import { Sidebar } from "./sidebar/sidebar";

const BaseLayout: FC = (): ReactElement => {
  return <Sidebar>
    <p>tes</p>
  </Sidebar>;
};

export default BaseLayout;