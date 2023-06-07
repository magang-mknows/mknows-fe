import { atom, selector } from "recoil";
import {
  TProcessItem,
  TProcessParams,
  TRequestResponse,
  TResultDataDummy,
  TResultParams,
} from "./types";

export const icon = atom<string[]>({
  key: "request-data-icons",
  default: [
    "/assets/dashboard/card1.svg",
    "/assets/dashboard/card2.svg",
    "/assets/dashboard/card3.svg",
    "/assets/dashboard/card4.svg",
    "/assets/dashboard/card2.svg",
    "/assets/dashboard/card1.svg",
    "/assets/dashboard/card4.svg",
    "/assets/dashboard/card3.svg",
    "/assets/dashboard/card4.svg",
    "/assets/dashboard/card3.svg",
    "/assets/dashboard/card2.svg",
    "/assets/dashboard/card1.svg",
    "/assets/dashboard/card4.svg",
    "/assets/dashboard/card2.svg",
    "/assets/dashboard/card1.svg",
    "/assets/dashboard/card4.svg",
  ],
});

export const resultSearch = atom({
  key: "result-query",
  default: "",
});

export const resultOption = atom({
  key: "result-option-query",
  default: "",
});

export const resultDummyData = atom<TResultDataDummy[]>({
  key: "result-dummy-data",
  default: [
    {
      _id: "6455bba89d1bba63fbc8a801",
      request_number: "0007821",
      feature: "AI Identity Scoring",
      finished_at: "Sat May 27 2023 19:14:02 GMT+0700 (Indochina Time)",
      requested_at: "2023-05-27T12:14:02.856Z",
      total_user: 1,
    },
    {
      _id: "6455bba89d1bba63fbc8a805",
      request_number: "0007823",
      feature: "AI Character Scoring",
      finished_at: "Sat May 27 2023 19:14:02 GMT+0700 (Indochina Time)",
      requested_at: "2023-05-27T12:14:02.857Z",
      total_user: 1,
    },
  ],
});

export const processDummyData = atom<TProcessItem[]>({
  key: "process-dummy-data",
  default: [
    {
      _id: "646f6a0617887bd055d4ae04",
      request_number: "0007821",
      feature: "AI Capability Scoring",
      result: null,
      status: "GAGAL",
      problem: "NIK SALAH",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
    {
      _id: "646f6a0617887bd055d4ac02",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: null,
      status: "GAGAL",
      problem: "TOKEN HABIS",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Micheal Bogisich",
      nik: "4689816324237624",
    },
    {
      _id: "646f6a0617887bd055d4ab03",
      request_number: "0007822",
      feature: "AI Character Scoring",
      result: null,
      status: "GAGAL",
      problem: "FOTO SELFIE TIDAK DI KENAL",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Eddie Dickens",
      nik: "5585148118074267",
    },
    {
      _id: "646f6a0617887bd055d4ac04",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: null,
      status: "MENUNGGU",
      problem: "-",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
    {
      _id: "646f6a0617887bd055d4ac03",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: null,
      status: "MENUNGGU",
      problem: "-",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Lora O'Conner",
      nik: "5500026675168637",
    },
    {
      _id: "646f6a0617887bd055d4ab04",
      request_number: "0007822",
      feature: "AI Character Scoring",
      result: null,
      status: "GAGAL",
      problem: "NIK SALAH",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
  ],
});

export const resultFilter = selector({
  key: "result-filter",
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.feature.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.total_user.toString().toLowerCase().includes(get(resultSearch).toLowerCase()),
    ),
});

export const processFilter = selector({
  key: "result-filter",
  get: ({ get }) =>
    get(processDummyData).filter(
      (user) =>
        user.feature.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.name.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.nik.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.problem.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.request_number.toString().toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.requested_at.toString().toLowerCase().includes(get(resultSearch).toLowerCase()),
    ),
});

export const tableDataState = atom<TRequestResponse[]>({
  key: "table-data-state",
  default: [],
});

export const filterActionProcess = atom<TProcessParams>({
  key: "process-filter-action",
  default: {
    search: "",
    feature: "",
    per_page: "",
    page: "",
  },
});

export const filterActionResult = atom<TResultParams>({
  key: "result-filter-action",
  default: {
    search: "",
    feature: "",
    per_page: "",
    page: "",
  },
});
