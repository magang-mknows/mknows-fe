import { Control } from 'react-hook-form';

export type TUserDataDummy = {
  no: number;
  nik: number;
  nama: string;
  tanggal: string;
};

export type TDataUploader = {
  name: string;
  hasLabel: boolean;
  control: Control;
  required: boolean;
  accepted: string;
  label: string;
};

export type TUserDataResponse = { getUserData: TUserDataDummy[] };

export type TUserQueryResponse = {
  getUserQuery: string;
  setUserQuery: (val: string) => void;
};

export type TDataUploaderResponse = { getUploadData: TDataUploader[] };

export type TUploadQueryResponse = {
  getUploadQuery: string;
  setUploadQuery: (val: string) => void;
};
