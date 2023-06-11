import { TuseMyStudyBreadCrumbsItemsProps } from "./types";

export const useMyStudyBreadCrumbsItems = ({
  subjectName,
  subjectId,
  sessionId,
  competencyName,
  competencyDetailsName,
  competencyDetailsId,
  edgeName,
  type,
}: TuseMyStudyBreadCrumbsItemsProps) => {
  const items = [
    {
      name: "Home",
      link: "/",
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

  if (competencyName) {
    items.push({
      name: competencyName,
      link: "",
    });
  }
  if (competencyName && competencyDetailsName) {
    items[items.length - 1].link = `${
      items[items.length - 2].link
    }/${competencyName.toLowerCase()}/${sessionId}`;
  }
  if (competencyName && competencyDetailsName && type === "modul") {
    const moduleContentIndex = competencyDetailsName.split("-")[1];
    items.push({
      name: "Modul-" + moduleContentIndex,
      link: "",
    });
  }
  if (competencyName && competencyDetailsName && type === "kuis") {
    items.push({
      name: competencyDetailsName + " " + competencyName,
      link: "",
    });
  }
  if (competencyName && competencyDetailsName && type === undefined) {
    items.push({
      name: competencyDetailsName,
      link: "",
    });
  }

  if (edgeName) {
    items[items.length - 1].link = `${
      items[items.length - 2].link
    }/${competencyDetailsName?.toLowerCase()}/${competencyDetailsId}`;
    items.push({
      name: edgeName,
      link: "",
    });
  }

  return {
    items,
  };
};
