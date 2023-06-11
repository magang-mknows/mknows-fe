import { useRecoilState } from "recoil";
import { currentQuizReviewNumberState, quizReviewQuestionAnswerState } from "./store";
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
  const [get, set] = useRecoilState(quizReviewQuestionAnswerState);

  return {
    getQuizReviewQuestionsAnswers: get,
    setQuizReviewQuestionsAnswers: (val) => set(val),
  };
};

export type TuseHandleQuizReviewBreadCrumbProps = {
  subjectDetailPath: string;
  quizPath: string;
  quizHistoryPath: string;
};

export const useHandleQuizReviewBreadCrumb = ({
  subjectDetailPath,
  quizPath,
  quizHistoryPath,
}: TuseHandleQuizReviewBreadCrumbProps) => {
  return [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Studi-ku",
      link: "/studi-ku",
    },
    {
      name: "Mata-Kuliah",
      link: subjectDetailPath,
    },
    {
      name: "Quiz",
      link: quizPath,
    },
    {
      name: "Riwayat Quiz",
      link: quizHistoryPath,
    },
    {
      name: "Tinjauan",
      link: "",
    },
  ];
};

// SERVICE API

export const useGetQuizReviewByAttemptId = (
  payload: TQuizReviewPayload,
): UseQueryResult<TQuizReviewResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-review-get", payload],
    queryFn: async () => await quizReviewGetRequest(payload),
  });
