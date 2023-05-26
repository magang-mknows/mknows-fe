import { GuideDictionaryState } from "./store";
import { DictionaryType } from "./type";
import { useRecoilState } from "recoil";

type GuideDictionary = {
  setGuideDictionary: (val: Array<DictionaryType>) => void;
  getGuideDictionary: Array<DictionaryType>;
};

export const useGuideDictionary = (): GuideDictionary => {
  const [get, set] = useRecoilState(GuideDictionaryState);
  return {
    setGuideDictionary: (val: Array<DictionaryType>) => set(val),
    getGuideDictionary: get,
  };
};
