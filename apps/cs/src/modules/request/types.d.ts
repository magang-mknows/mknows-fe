import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TResultDataDummy = {
  _id: string;
  request_number: string;
  feature: string;
  finished_at: string;
  requested_at: string;
  total_user: number;
};

export type TIcons = {
  icon: string;
};

export type TRequestDataResponse = { getRequestData: string[] };

export type TResultQueryResponse = {
  getResultQuery: string;
  setResultQuery: (val: string) => void;
};

export type TRequestItem = {
  _id: string;
  name: string;
  number: number;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type TRequestResponse = TMetaResponse<TRequestItem>;

export type TProcessItem = {
  _id: string;
  request_number: string;
  feature: string;
  result: null;
  status: string;
  problem: string;
  __v: number;
  requested_at: string;
  finished_at: string;
  name: string;
  nik: string;
};

export type TProcessResponse = { getProcessData: TProcessItem[] };

export type TProcessParams = {
  search?: string;
  feature?: string;
  per_page?: string;
  page?: string;
};

export type TResultItem = {
  _id: string;
  request_number: string;
  feature: string;
  finished_at: string;
  requested_at: string;
  total_user: number;
};

export type TResultResponse = { getResultData: TResultDataDummy[] };
export type TResultParams = {
  search?: string;
  feature?: string;
  per_page?: string;
  page?: string;
  sort_by?: string;
};
