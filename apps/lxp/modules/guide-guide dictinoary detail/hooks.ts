import { useRecoilState } from 'recoil';
import { DictionaryType } from './constant';
import { GuideDictionaryState } from './store';

type GuideDictionary = {
  setGuideDictionary: (val: Array<DictionaryType>) => void;
  getGuideDictionary: Array<DictionaryType>;
};

export const useGuideDictinoary = (): GuideDictionary => {
  const [get, set] = useRecoilState(GuideDictionaryState);
  return {
    setGuideDictionary: (val: Array<DictionaryType>) => set(val),
    getGuideDictionary: get,
  };
};
