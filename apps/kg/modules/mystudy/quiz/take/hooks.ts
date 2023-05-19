import { useRecoilState } from 'recoil';
import {
  quizQuestionState,
  currentQuizNumberState,
  quizRequestSubmitState,
} from './store';
import {
  TuseCurrentQuizNumber,
  TuseQuizQuestion,
  TQuestion,
  TQuizTakeResponse,
  TQuizQuestionsAnswers,
  TQuizRequestSubmit,
  TuseQuizRequestSubmit,
} from './type';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { quizTakeGetRequest } from './api';

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
  const [getCurrentState, setCurrentData] = useRecoilState(
    currentQuizNumberState
  );
  return {
    setCurrNumber: (val: number) => setCurrentData(val),
    getCurrNumber: getCurrentState,
  };
};

// SERVICE API HOOKS

export const useGetQuizTakeById = (
  id: string | number
): UseQueryResult<TQuizTakeResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-take-get', id],
    queryFn: async () => await quizTakeGetRequest(id),
  });
