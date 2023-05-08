import { useRecoilState } from 'recoil';
import { TDiscussionItem } from '../component/types';
import { popupGetUser } from '../stores';

type ReturnTypes = {
  setPopupUser: (val: TDiscussionItem) => void;
  getPopupUser: TDiscussionItem;
};

export const usePopupGetDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TDiscussionItem) => set(val),
    getPopupUser: get,
  };
};
