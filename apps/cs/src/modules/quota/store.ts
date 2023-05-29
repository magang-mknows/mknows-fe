import { atom } from "recoil";
import { TQuotaParams } from "./types";

export const icon = atom<string[]>({
  key: "quota-data-icons",
  default: [
    "/assets/quota/card1.svg",
    "/assets/quota/card2.svg",
    "/assets/quota/card3.svg",
    "/assets/quota/card4.svg",
  ],
});

export const filterAction = atom<TQuotaParams>({
  key: "flter-action",
  default: {
    date_from: "",
    date_to: "",
    page: "",
    per_page: "",
    search: "",
    feature: "",
  },
});

export const quotaSearch = atom({
  key: "quota-query",
  default: "",
});

export const resultOption = atom({
  key: "quota-option-query",
  default: "",
});
