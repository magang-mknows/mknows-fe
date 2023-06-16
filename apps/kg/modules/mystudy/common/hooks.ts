import { TuseMyStudyBreadCrumbsItemsProps } from "./types";

function capitalizeFirstLetter(val: string): string {
  return val?.charAt(0).toUpperCase() + val?.slice(1);
}

export const useMyStudyBreadCrumbsItems = ({
  competencyDetailsName,
  edgeName,
  router,
  type,
}: TuseMyStudyBreadCrumbsItemsProps) => {
  const sessionId = router?.query.sessionId as string;
  const subjectName = router?.query.subjectName as string;
  const subjectId = router?.query.subjectId as string;
  const competencyDetailsId = router?.query.quizId as string;

  const items = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Studi-ku",
      link: "/studi-ku",
    },
  ];

  if (subjectName) {
    const subjectNameEncoded = encodeURIComponent(subjectName as string);
    items.push({
      name: subjectName,
      link: subjectId ? `/studi-ku/${subjectNameEncoded}/${subjectId}` : "",
    });
  }

  if (type) {
    const nameCapitalized = capitalizeFirstLetter(type);
    items.push({
      name: nameCapitalized,
      link: "",
    });
  }
  if (type && competencyDetailsName) {
    items[items.length - 1].link = `${items[items.length - 2].link}/${type}/${sessionId}`;
  }
  const competencyDetailsNameCapitalized = capitalizeFirstLetter(competencyDetailsName as string);
  if (type === "kuis" && competencyDetailsName) {
    const nameCapitalized = capitalizeFirstLetter(type);
    items.push({
      name: competencyDetailsNameCapitalized + " " + nameCapitalized,
      link: "",
    });
  }
  if ((type === undefined || type === "modul") && competencyDetailsName) {
    items.push({
      name: competencyDetailsNameCapitalized,
      link: "",
    });
  }
  if (edgeName) {
    items[items.length - 1].link = `${
      items[items.length - 2].link
    }/${competencyDetailsName}/${competencyDetailsId}`;
    items.push({
      name: edgeName,
      link: "",
    });
  }

  return {
    items,
  };
};
