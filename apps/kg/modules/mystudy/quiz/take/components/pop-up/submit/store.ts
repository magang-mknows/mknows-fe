import { atom } from 'recoil';

export const quizSubmitPopupState = atom<boolean>({
  key: 'quiz-submit-popup',
  default: false,
});
