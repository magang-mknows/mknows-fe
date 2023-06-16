import { atom, selector } from "recoil";
import { TQuizReviewItem } from "./types";

export const currentQuizReviewNumberState = atom({
  key: "current-quiz-number-state",
  default: 1,
});

export const quizReviewdataState = atom<Array<TQuizReviewItem>>({
  key: "quiz-review-data-state",
  default: [],
});

export const quizReviewDataWithCorrectItemState = selector<Array<TQuizReviewItem>>({
  key: "quiz-review-data-with-correct-data-state",
  get: ({ get }): Array<TQuizReviewItem> => {
    const quizReviewData = get(quizReviewdataState);

    const quizReviewDataFiltered = quizReviewData.map((data) => {
      const isEqual = data.answers.some((answer) => answer.is_correct && answer.is_selected);
      if (isEqual) {
        return { ...data, is_correct_item: true };
      }
      return { ...data, is_correct_item: false };
    });

    return quizReviewDataFiltered;
  },
});
