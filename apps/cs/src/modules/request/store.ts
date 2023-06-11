import { atom, selector } from "recoil";
import {
  TProcessParams,
  TRequestResponse,
  TResultByIdParams,
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

export const resultFilter = selector({
  key: "result-filter",
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.feature.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.total_user.toString().toLowerCase().includes(get(resultSearch).toLowerCase()),
    ),
});

export const resultOption = atom({
  key: "result-option-query",
  default: "",
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
    feature: "",
    per_page: "",
    page: "",
  },
});

export const filterActionResultbyId = atom<TResultByIdParams>({
  key: "result-filter-action",
  default: {
    order: "",
  },
});
