import { atom } from "recoil";
import { TSubjectDetails } from "./type";

export const SubjectDetailsState = atom<Array<TSubjectDetails>>({
  key: "subject-details-state",
  default: [
    {
      conference: 1,
      status: {
        module: "Done",
        quiz: "Done",
        assignment: "Done",
        disscussion: "Done",
      },
      progress: [],
      isOpen: true,
    },
    {
      conference: 2,
      status: {
        module: "Done",
        quiz: "In Progress",
        assignment: "Done",
        disscussion: "In Progress",
      },
      progress: ["In Progress", "In Progress", "In Progress", "In Progress"],
      isOpen: false,
    },
    {
      conference: 3,
      status: {
        module: "In Progress",
        quiz: "In Progress",
        assignment: "In Progress",
        disscussion: "In Progress",
      },
      progress: ["In Progress", "In Progress", "In Progress", "In Progress"],
      isOpen: false,
    },
  ],
});
