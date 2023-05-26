import { atom } from "recoil";
import { TProgress } from "./types";

export const ProgressState = atom<Array<TProgress>>({
  key: "progress-state",
  default: [
    {
      judul: "Introduction to Japanese Culture",
      subjudul: "Japanese Culture",
      semester: 1,
      totalPertemuan: 10,
      pertemuanDone: 8,
    },
    {
      judul: "Introduction to Japanese Culture",
      subjudul: "Japanese Culture",
      semester: 1,
      totalPertemuan: 5,
      pertemuanDone: 5,
    },
    {
      judul: "Introduction to Japanese Culture",
      subjudul: "Japanese Culture",
      semester: 1,
      totalPertemuan: 14,
      pertemuanDone: 5,
    },
    {
      judul: "Introduction to Japanese Culture",
      subjudul: "Japanese Culture",
      semester: 1,
      totalPertemuan: 10,
      pertemuanDone: 9,
    },
  ],
});

export const progressSectionDummyData: {
  id: number;
  judul: string;
  subjudul: string;
  semester: number;
  totalPertemuan: number;
  pertemuanDone: number;
}[] = [
  {
    id: 1,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 8,
  },
  {
    id: 2,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 5,
    pertemuanDone: 5,
  },
  {
    id: 3,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 9,
  },
  {
    id: 4,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 14,
    pertemuanDone: 5,
  },
];
