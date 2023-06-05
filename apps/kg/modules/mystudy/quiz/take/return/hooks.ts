import { useRecoilState } from 'recoil';
import { alreadyReturnQuizState } from './store';
import { TAlreadyReturnQuiz } from './types';

export const useAlreadyReturnQuiz = () => {
  const [get, set] = useRecoilState(alreadyReturnQuizState);

  return {
    getAlreadyReturnQuizProp: get,
    setAlreadyReturnQuizProp: (val: TAlreadyReturnQuiz) => set(val),
  };
};
