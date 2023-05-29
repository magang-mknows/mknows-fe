import { useLogout } from "../../modules";
import { NextPage } from "next";
import { ReactElement } from "react";

const DashboardPages: NextPage = (): ReactElement => {
  const { mutate } = useLogout();
  return <span onClick={() => mutate({})}>Ini Halaman Dashboard</span>;
};

export default DashboardPages;
