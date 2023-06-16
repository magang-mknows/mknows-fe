import { useRecoilState, useSetRecoilState } from "recoil";
import { quizQuestionState, currentQuizNumberState, quizRequestSubmitState } from "./store";
import {
  TuseCurrentQuizNumber,
  TuseQuizQuestion,
  TQuizTakeResponse,
  TQuizQuestionsAnswers,
  TQuizRequestSubmit,
  TuseQuizRequestSubmit,
  TQuizSubmitResponse,
  TQuizSubmitPayload,
} from "./type";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { quizSubmitRequest, quizTakeGetRequest } from "./api";
import { useEffect, useState } from "react";

export const useQuizQuestion = (): TuseQuizQuestion => {
  const [getQuestion, setQuestion] = useRecoilState(quizQuestionState);
  return {
    setQuestionsData: (val: Array<TQuizQuestionsAnswers>) => setQuestion(val),
    getQuestionsData: getQuestion,
  };
};

export const useQuizRequestSubmit = (): TuseQuizRequestSubmit => {
  const [getQuestion, setQuestion] = useRecoilState(quizRequestSubmitState);
  return {
    setQuizRequestSubmit: (val: Array<TQuizRequestSubmit>) => setQuestion(val),
    getQuizRequestSubmit: getQuestion,
  };
};

export const useCurrentQuizNumber = (): TuseCurrentQuizNumber => {
  const [getCurrentState, setCurrentData] = useRecoilState(currentQuizNumberState);
  return {
    setCurrNumber: (val: number) => setCurrentData(val),
    getCurrNumber: getCurrentState,
  };
};

export const useAutoSaveQuizAnswer = () => {
  const [newStoredAnswer, setNewStoredAnswer] = useState<TQuizRequestSubmit[] | []>([]);
  const setQuizRequestSubmit = useSetRecoilState(quizRequestSubmitState);
  const [storedAnswer, setStoredAnswer] = useState<TQuizRequestSubmit[]>(() => {
    const storageValue = localStorage.getItem("quiz.answer");
    if (storageValue) {
      const storageValueParsed = JSON.parse(storageValue);
      setQuizRequestSubmit(storageValueParsed as TQuizRequestSubmit[]);
      return storageValueParsed;
    }
    return newStoredAnswer;
  });

  useEffect(() => {
    localStorage.setItem("quiz.answer", JSON.stringify(storedAnswer));
  }, [storedAnswer]);

  useEffect(() => {
    setStoredAnswer(newStoredAnswer as TQuizRequestSubmit[]);
  }, [newStoredAnswer]);

  function resetStoredAnswer() {
    localStorage.removeItem("quiz.answer");
    localStorage.removeItem("targetTime");
    localStorage.removeItem("timeRemaining");
  }

  return { storedAnswer, setNewStoredAnswer, resetStoredAnswer };
};

// SERVICE API HOOKS

export const useGetQuizTakeById = (
  id: string | number,
): UseQueryResult<TQuizTakeResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-take-get", id],
    queryFn: async () => await quizTakeGetRequest(id),
  });

export const useSubmitQuiz = (): UseMutationResult<
  TQuizSubmitResponse,
  TMetaErrorResponse,
  TQuizSubmitPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["submit-quiz"],
    mutationFn: async (payload) => await quizSubmitRequest(payload),
  });
