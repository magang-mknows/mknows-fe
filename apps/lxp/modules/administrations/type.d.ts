export type ReturnTypesPrivateInformation = {
  setPrivateStatus: (val: boolean) => void;
  getPrivateStatus: boolean;
};

export type ReturnTypesJobInformation = {
  setJobStatus: (val: boolean) => void;
  getJobStatus: boolean;
};

export type ReturnTypesFileInformation = {
  setFileStatus: (val: boolean) => void;
  getFileStatus: boolean;
};

export type StatusReturnTypesAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

import { ICommonMetaResponse } from '../../service/types';

export type TAdministrationItems = {
  full_name: string;
  nip: string;
  email: string;
  department: string;
  leaderDivision: string;
  companyName: string;
};

export type TAdministrationResponse = ICommonMetaResponse<TAdministrationItems>;
