import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import DrillSimulasion from "./index";
// import DrillSimulasion from "@/modules/DrillSimulasion";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <DrillSimulasion />;
};

export default Detail;
