import { useRecoilState } from "recoil";
import { UserSearchState } from "./store";

type SearchReturnTypes = {
  setUserSearch: (val: string) => void;
  getUserSearch: string;
};

export const useUserSearch = (): SearchReturnTypes => {
  const [getInput, setInput] = useRecoilState(UserSearchState);
  return {
    setUserSearch: (val: string) => setInput(val),
    getUserSearch: getInput,
  };
};
