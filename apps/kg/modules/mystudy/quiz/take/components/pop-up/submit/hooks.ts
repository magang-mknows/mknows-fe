import { useRecoilState } from 'recoil';
import { quizSubmitPopupState } from './store';

export const useQuizSubmitPopup = () => {
  const [get, set] = useRecoilState(quizSubmitPopupState);
  return {
    getQuizSubmitPopupStatus: get,
    setQuizSubmitPopupStatus: (val: boolean) => set(val),
  };
};
