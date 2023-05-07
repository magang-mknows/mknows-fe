import { useRecoilState } from "recoil";
import { chooseSidebar, discussionSidebar } from "./store";
import { Sidebar } from "./type";

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
