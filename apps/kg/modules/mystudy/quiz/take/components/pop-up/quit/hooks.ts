import { useRecoilState } from 'recoil';
import { quizQuitPopupState } from './store';
import { TQuizQuitPopup } from './types';

export const useQuizQuitPopup = () => {
  const [get, set] = useRecoilState(quizQuitPopupState);
  return {
    getQuizQuitPopup: get,
    setQuizQuitPopup: (val: TQuizQuitPopup) => set(val),
  };
};
