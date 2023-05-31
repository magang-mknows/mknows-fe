import { atom } from "recoil";

export const userSearch = atom({
  key: "user-query",
  default: "",
});

export const CategoryStatusState = atom({
  key: "category-status-state",
  default: "none",
});

export const IdentityStatusState = atom({
  key: "identity-status-state",
  default: false,
});

export const CharacterStatusState = atom({
  key: "character-status-state",
  default: false,
});

export const CapabilityStatusState = atom({
  key: "capability-status-state",
  default: false,
});
