import { atom } from 'recoil';
import { TQuizQuestionsAnswers } from './type';

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

export const currentQuizNumberState = atom({
  key: 'currentQuizNumberState',
  default: 1,
});
