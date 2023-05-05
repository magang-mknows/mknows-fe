import { useRecoilState } from 'recoil';
import { quizQuestionState, currentQuizNumberState } from './store';
import { TuseCurrentQuizNumber, TuseQuizQuestion, TQuestion } from './type';

export const useQuizQuestion = (): TuseQuizQuestion => {
  const [getQuestion, setQuestion] = useRecoilState(quizQuestionState);
  return {
    setQuestionsData: (val: Array<TQuestion>) => setQuestion(val),
    getQuestionsData: getQuestion,
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
