import { atom } from 'recoil';
import { TTimerByGlobalState } from './types';

export const timerByGlobalStateState = atom<TTimerByGlobalState>({
  key: 'quiz-global-timer',
  default: {
    hours: '',
    minutes: '',
    seconds: '',
    isComplete: false,
  },
});
