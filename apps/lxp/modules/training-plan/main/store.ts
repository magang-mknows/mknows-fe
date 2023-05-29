import { atom } from "recoil";

export const searchKeyword = atom({
  key: "department-keyword",
  default: "",
});
export const debounceKeyword = atom({
  key: "department-debounce-keyaord",
  default: "",
});
