import { useRecoilState } from "recoil";
import {
  PopupModalDeleteDiscussion,
  chooseSidebar,
  discussionSidebar,
} from './store';
import { Sidebar } from './type';

type ChooseSidebar = {
  setChoose: (val: string) => void;
  getChoose: string;
};

type DiscussionTypes = {
  setDiscussion: (val: Array<Sidebar>) => void;
  getDiscussion: Array<Sidebar>;
};

export const useChooseSidebar = (): ChooseSidebar => {
  const [getChoose, setChoose] = useRecoilState(chooseSidebar);
  return {
    setChoose: (val: string) => setChoose(val),
    getChoose: getChoose,
  };
};

export const useSidebar = (): DiscussionTypes => {
  const [getDiscussion, setDiscussion] = useRecoilState(discussionSidebar);
  return {
    setDiscussion: (val: Array<Sidebar>) => setDiscussion(val),
    getDiscussion: getDiscussion,
  };
};

type ReturnTypes = {
  setPopupDeleteStatus: (val: boolean) => void;
  getPopupDeleteStatus: boolean;
};

export const usePopupDeleteDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalDeleteDiscussion);
  return {
    setPopupDeleteStatus: (val: boolean) => set(val),
    getPopupDeleteStatus: get,
  };
};
