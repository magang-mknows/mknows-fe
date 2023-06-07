import { atom } from "recoil";
import { Instruction, TMyStudyAssignmentItem } from "./type";

export const dataTabelState = atom<Array<Instruction>>({
  key: "instructions-assignment",
  default: [
    {
      matkul: "Accounting 1",
      pertemuan: 1,
      dosen: "Post - Bob S.Kom, M.Kom-Dosen-0001",
      waktu: "23 Febuari 2023, 9:19 AM",
      file: "Tugas1.pdf",
      deadline: "25/02/2023 24:59 WIB",
    },
  ],
});

export const mystudyAssignmentState = atom<TMyStudyAssignmentItem | null>({
  key: "mystudy-assignment-state",
  default: null,
});
