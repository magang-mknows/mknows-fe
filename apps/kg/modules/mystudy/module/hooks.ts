import { confirmModuleState } from './store';
import { useRecoilState } from 'recoil';
import { ConfirmModulTypes } from './type';

export const useConfirmModul = (): ConfirmModulTypes => {
  const [getConfirm, setConfirm] = useRecoilState(confirmModuleState);
  return {
    setConfirmModul: (val: boolean) => setConfirm(val),
    getConfirmModul: getConfirm,
  };
};
