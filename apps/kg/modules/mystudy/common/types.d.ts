export type TMyStudyBreadCrumbsItems = {
  name: string;
  link: string;
};

export type TuseMyStudyBreadCrumbsItemsProps = {
  type?: "modul" | "kuis" | "tugas" | "diskusi" | undefined;
  subjectName?: string;
  subjectId?: string;
  competencyName?: string;
  sessionId?: string;
  competencyDetailsName?: string;
  competencyDetailsId?: string;
  edgeName?: string;
  path?: string;
};
