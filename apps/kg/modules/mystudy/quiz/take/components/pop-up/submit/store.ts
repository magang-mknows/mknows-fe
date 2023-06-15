import { atom } from "recoil";
import { TQuizSubmitPopup } from "./types";

export const quizSubmitPopupState = atom<TQuizSubmitPopup>({
  key: "quiz-submit-popup",
  default: {
    quizTakeId: "",
    prevPath: "",
    payloadReq: { questions_answers: [] },
    status: false,
  },
});
