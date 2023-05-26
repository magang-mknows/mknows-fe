import { useRecoilState } from 'recoil';
import { timerByGlobalStateState } from './store';
import { TTimerByGlobalState } from './types';

export const useTimerByGlobalState = () => {
  const [get, set] = useRecoilState(timerByGlobalStateState);

  return {
    getTimerByGlobalState: get,
    setTimerByGlobalState: (val: TTimerByGlobalState) => set(val),
  };
};
