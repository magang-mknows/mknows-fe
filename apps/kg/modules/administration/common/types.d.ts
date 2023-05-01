export type TReturnPrivateInformation = {
  setPrivateStatus: (val: boolean) => void;
  getPrivateStatus: boolean;
};

export type TReturnJobInformation = {
  setJobStatus: (val: boolean) => void;
  getJobStatus: boolean;
};

export type TReturnFileInformation = {
  setFileStatus: (val: boolean) => void;
  getFileStatus: boolean;
};

export type TStatusReturnAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export type TAdministrationItem = {
  id: string;
  user_id: string;
  status: string;
  type: string;
  action_by: string;
  biodata: TBiodataAdm;
  familial: TFamilyAdm;
  file: string;
};
