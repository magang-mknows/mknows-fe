import { atom } from "recoil";

export const AdministrationStatusState = atom({
  key: "administration-status-state",
  default: "none",
});

export const AdministrationStepState = atom({
  key: "administration-step-state",
  default: 0,
});
