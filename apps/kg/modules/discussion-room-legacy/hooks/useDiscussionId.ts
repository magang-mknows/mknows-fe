import { useRecoilState } from 'recoil';
import { setid } from '../stores';

type returnTypes = {
  setDiscussionId: (val: string) => void;
  getDiscussionId: string;
};

export const useDiscussionId = (): returnTypes => {
  const [get, set] = useRecoilState(setid);
  return {
    setDiscussionId: (val: string) => set(val),
    getDiscussionId: get,
  };
};
