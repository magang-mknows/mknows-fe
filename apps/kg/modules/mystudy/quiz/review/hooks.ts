import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentQuizReviewNumberState,
  quizReviewDataWithCorrectItemState,
  quizReviewdataState,
} from "./store";
import { TQuizReviewPayload, TuseQuizReviewQuestionsAnswers } from "./types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TQuizReviewResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { quizReviewGetRequest } from "./api";

export const useCurrentQuizReviewNumber = () => {
  const [get, set] = useRecoilState(currentQuizReviewNumberState);
  return {
    getCurrNumber: get,
    setCurrNumber: (val: number) => set(val),
  };
};

export const useQuizReviewQuestionsAnswers = (): TuseQuizReviewQuestionsAnswers => {
  const setReviewData = useSetRecoilState(quizReviewdataState);
  const quizReviewWithCorrectItem = useRecoilValue(quizReviewDataWithCorrectItemState);

  return {
    getQuizReviewQuestionsAnswers: quizReviewWithCorrectItem,
    setQuizReviewQuestionsAnswers: (val) => setReviewData(val),
  };
};

// SERVICE API

export const useGetQuizReviewByAttemptId = (
  payload: TQuizReviewPayload,
): UseQueryResult<TQuizReviewResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-review-get", payload],
    queryFn: async () => await quizReviewGetRequest(payload),
  });
