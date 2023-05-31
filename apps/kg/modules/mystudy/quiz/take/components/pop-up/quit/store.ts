import { atom } from 'recoil';
import { TQuizQuitPopup } from './types';

export const quizQuitPopupState = atom<TQuizQuitPopup>({
  key: 'quiz-quit-popup',
  default: {
    quizTakeId: '',
    prevPath: '',
    link: '',
    status: false,
  },
});
