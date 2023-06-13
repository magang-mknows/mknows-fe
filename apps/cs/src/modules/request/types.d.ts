import { TMetaResponse } from "@mknows-frontend-services/utils";

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
  total_data: number;
  price_per_unit:number;
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

export type TProcessResponse = TMetaResponse<TProcessItem>;

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

export type TResultResponse = TMetaResponse<TResultItem>;
export type TResultParams = {
  feature?: string;
  per_page?: string;
  page?: string;
};

export type TResultById = {
  _id: string;
  request_number: string;
  feature: string;
  company: string;
  __v: number;
  requested_at: string;
  finished_at: string;
  status: string;
  name: string;
  nik: string;
};

export type TResultByIdResponse = TMetaResponse<TResultById>;
export type TResultByIdParams = {
  id?: string;
  order?: string;
};

export type TResultDataDummy = {
  _id: string;
  request_number: string;
  feature: string;
  finished_at: string;
  requested_at: string;
  total_user: number;
};

export type TResultResponse = TMetaResponse<TResultItem>;
export type TResultDataResponse = { getResultData: TResultDataDummy[] };
export type TResultParams = {
  feature?: string;
  per_page?: string;
  page?: string;
};
