import { atom } from "recoil";

export const selectedOption = atom({
  key: "post-option",
  default: "",
});

export const isModalOpen = atom({
  key: "modal-opened",
  default: false,
});

export const reportDetailTitle = atom({
  key: "report-detail-title",
  default: "",
});

export const reportSuccess = atom({
  key: "report-success",
  default: false,
});

export const selectedPostId = atom({
  key: "post-id",
  default: "",
});
