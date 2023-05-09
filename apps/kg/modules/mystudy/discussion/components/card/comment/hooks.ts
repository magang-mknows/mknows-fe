import { useRecoilState } from 'recoil';
import { PopupModalEditDiscussion, PopupModalDeleteDiscussion } from './store';
import { TusePopupDeleteDiscussion, TusePopupEditDiscussion } from './types';

export const usePopupEditDiscussion = (): TusePopupEditDiscussion => {
  const [get, set] = useRecoilState(PopupModalEditDiscussion);
  return {
    setPopupEditStatus: (val: boolean) => set(val),
    getPopupEditStatus: get,
  };
};

export const usePopupDeleteDiscussion = (): TusePopupDeleteDiscussion => {
  const [get, set] = useRecoilState(PopupModalDeleteDiscussion);
  return {
    setPopupDeleteStatus: (val: boolean) => set(val),
    getPopupDeleteStatus: get,
  };
};
