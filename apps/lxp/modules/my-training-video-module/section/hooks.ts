import { useRecoilState } from 'recoil';
import { videoGuideState } from '../store';
import { videoMytrainingTypes } from '../type';

type MytrainingVideo = {
  setGuideVideo: (val: Array<videoMytrainingTypes>) => void;
  getGuideVideo: Array<videoMytrainingTypes>;
};

export const useMytrainingVideo = (): MytrainingVideo => {
  const [get, set] = useRecoilState(videoGuideState);
  return {
    setGuideVideo: (val: Array<videoMytrainingTypes>) => set(val),
    getGuideVideo: get,
  };
};
