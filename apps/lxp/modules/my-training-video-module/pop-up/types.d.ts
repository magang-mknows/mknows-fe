import { ICommonMetaResponse } from "../../service/types";
export type TModuleResumeResponse = {
  module_answer: string;
};


export type TusePopupConfirmModul = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};


export type paramsPostModule = {
  moduleID: string;
  batchID: string;
};

export type TModuleResponse = ICommonMetaResponse<TModuleResumeResponse>