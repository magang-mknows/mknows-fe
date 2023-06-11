import { NextRouter } from "next/router";

export type TMyStudyBreadCrumbsItems = {
  name: string;
  link: string;
};

export type TuseMyStudyBreadCrumbsItemsProps = {
  type?: "modul" | "kuis" | "tugas" | "diskusi" | undefined;
  router?: NextRouter;
  competencyDetailsName?: string;
  edgeName?: string;
};
