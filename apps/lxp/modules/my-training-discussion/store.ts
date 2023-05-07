import { atom } from "recoil";
import { Sidebar } from "./type";

export const discussionSidebar = atom<Array<Sidebar>>({
  key: "discussion-Mystudy",
  default: [
    {
      id: "1",
      session: "Pertemuan 1",
      modul: [
        {
          id: "1",
          modul: "Module 1",
        },
        {
          id: "2",
          modul: "Module 2",
        },
      ],
    },
    {
      id: "2",
      session: "Pertemuan 2",
      modul: [
        {
          id: "3",
          modul: "Module 1",
        },
        {
          id: "4",
          modul: "Module 2",
        },
      ],
    },
  ],
});

export const chooseSidebar = atom({
  key: "choose-sidebar",
  default: "",
});
