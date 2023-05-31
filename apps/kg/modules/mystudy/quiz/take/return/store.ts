import { atom } from 'recoil';
import { TAlreadyReturnQuiz } from './types';

export const alreadyReturnQuizState = atom<TAlreadyReturnQuiz>({
  key: 'quiz-already-return-state',
  default: {
    status: true,
  },
});
