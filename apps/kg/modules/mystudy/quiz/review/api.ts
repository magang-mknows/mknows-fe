import api from "../../../../services/api";
import { TQuizReviewPayload, TQuizReviewResponse } from "./types";

export const quizReviewGetRequest = async (
  payload: TQuizReviewPayload,
): Promise<TQuizReviewResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      attempt: payload.attemptId,
    },
    url: "/studi-ku/quiz/review",
  });
  return data;
};
