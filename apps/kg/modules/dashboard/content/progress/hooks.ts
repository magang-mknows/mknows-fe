import { useRecoilState } from 'recoil';
import { TProgress, TProgressReturnTypes } from './types';
import { ProgressState } from './store';

export const useProgress = (): TProgressReturnTypes => {
  const [getProgress, setProgress] = useRecoilState(ProgressState);
  return {
    setProgress: (val: Array<TProgress>) => setProgress(val),
    getProgress: getProgress,
  };
};
