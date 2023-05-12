import { useRecoilState } from 'recoil';
import { videoGuideTypes } from './type';
import { videoGuideState } from './content/store';

type GuideVideo = {
  setGuideVideo: (val: Array<videoGuideTypes>) => void;
  getGuideVideo: Array<videoGuideTypes>;
};

export const useGuideVideo = (): GuideVideo => {
  const [get, set] = useRecoilState(videoGuideState);
  return {
    setGuideVideo: (val: Array<videoGuideTypes>) => set(val),
    getGuideVideo: get,
  };
};
