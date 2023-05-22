import { dataTabelState } from "./stores";
import { Instruction } from "./type";
import { useRecoilState } from "recoil";

type Instructions = {
  setInstruction: (val: Array<Instruction>) => void;
  getInstruction: Array<Instruction>;
};

export const useInstruction = (): Instructions => {
  const [getInstruction, setInstruction] = useRecoilState(dataTabelState);
  return {
    setInstruction: (val: Array<Instruction>) => setInstruction(val),
    getInstruction: getInstruction,
  };
};