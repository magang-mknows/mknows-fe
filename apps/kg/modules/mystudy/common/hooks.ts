import { TuseMyStudyBreadCrumbsItemsProps } from "./types";

export const useMyStudyBreadCrumbsItems = ({
  subjectName,
  subjectId,
  sessionId,
  competencyName,
  competencyDetailsName,
  competencyDetailsId,
  path,
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
    items.push({
      name: subjectName,
      link: subjectId ? `/studi-ku/${subjectName}/${subjectId}` : "",
    });
  }

  if (competencyName) {
    items.push({
      name: competencyName,
      link: "",
    });
  }
  if (competencyName && competencyDetailsName) {
    const subjectNameEncoded = encodeURIComponent(subjectName as string);
    console.log(subjectNameEncoded);
    items[
      items.length - 1
    ].link = `/studi-ku/${subjectNameEncoded}/${subjectId}/${competencyName}/${sessionId}`;
  }
  if (competencyName && competencyDetailsName && competencyDetailsName.includes("konten")) {
    const moduleContentIndex = competencyDetailsName.split("-")[1];
    items.push({
      name: "Modul-" + moduleContentIndex,
      link: "",
    });
  }
  if (competencyName && competencyDetailsName && !competencyDetailsName.includes("konten")) {
    items.push({
      name: competencyDetailsName,
      link: "",
    });
  }

  return {
    items,
  };
};
