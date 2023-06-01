import { atom } from "recoil";

export const currentQuestionState = atom({
  key: "current-quiz-number",
  default: 1,
});
