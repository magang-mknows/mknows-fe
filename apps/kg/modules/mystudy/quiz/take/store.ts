import { atom } from 'recoil';
import { TQuizQuestionsAnswers, TQuizRequestSubmit } from './type';

export const quizQuestionState = atom<Array<TQuizQuestionsAnswers>>({
  key: 'quiz-question-state',
  default: [
    {
      id: '',
      question: '',
      answers: [
        {
          id: '',
          answer: '',
        },
      ],
    },
  ],
});

export const quizRequestSubmitState = atom<Array<TQuizRequestSubmit>>({
  key: 'quiz-request-submit-state',
  default: [],
});

export const currentQuizNumberState = atom({
  key: 'currentQuizNumberState',
  default: 1,
});
