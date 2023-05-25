import { useRecoilState } from "recoil";
import { errorMessage } from "./store";

export const useErrorMessage = () => {
  const [get, set] = useRecoilState(errorMessage);
  return {
    get,
    set: (val: string) => set(val),
  };
};
