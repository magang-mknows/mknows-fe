import { chooseSidebar } from './store';
import { useRecoilState } from 'recoil';
import { discussionSidebar } from './store';
import { ChooseSidebar, DiscussionTypes, Sidebar } from './types';

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
