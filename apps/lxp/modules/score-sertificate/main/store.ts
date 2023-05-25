import { atom } from "recoil";

export const showDetailState = atom({
  key: "detail-score",
  default: false,
});

export const showDetailSertificate = atom({
  key: "detail-sertificate",
  default: false,
});
