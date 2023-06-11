import { atom } from "recoil";
import { TProcessParams, TRequestResponse, TResultByIdParams, TResultParams } from "./types";

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
