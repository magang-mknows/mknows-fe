import { Control } from 'react-hook-form';

export type TUserDataDummy = {
  no: number;
  nik: number;
  nama: string;
  tanggal: string;
  berkas: string;
};

export type TDataUploader = {
  name: string;
  hasLabel: boolean;
  control: Control;
  required: boolean;
  accepted: string;
  label: string;
};

export interface TtoolTip {
  children: ReactNode;
  tooltip?: string;
  className?: string;
}

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

export type StatusReturnTypeCategory = {
  setDataCategory: (val: string) => void;
  getDataCategory: string;
};

export type ReturnTypesDataIdentity = {
  setDataIdentity: (val: boolean) => void;
  getDataIdentity: boolean;
};

export type ReturnTypesDataCharacter = {
  setDataCharacter: (val: boolean) => void;
  getDataCharacter: boolean;
};

export type ReturnTypesDataCapabiity = {
  setDataCapability: (val: boolean) => void;
  getDataCapability: boolean;
};
