import { useRecoilState } from 'recoil';
import { PopupModalConfirmModul } from './store';
import { TusePopupConfirmModul } from './types';

export const usePopupConfirmModul = (): TusePopupConfirmModul => {
  const [get, set] = useRecoilState(PopupModalConfirmModul);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
