import { useRecoilState } from 'recoil';
import { quizSubmitPopupState } from './store';
import { TQuizSubmitPopup } from './types';

export const useQuizSubmitPopup = () => {
  const [get, set] = useRecoilState(quizSubmitPopupState);
  return {
    getQuizSubmitPopup: get,
    setQuizSubmitPopup: (val: TQuizSubmitPopup) => set(val),
  };
};
