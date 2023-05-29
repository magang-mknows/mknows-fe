import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TRequestDummyData = {
  icon: string;
  name: string;
  totalData: number;
  totalNotifikasi: number;
  category: string;
};

export type TRequestDataResponse = { getRequestData: TRequestDummyData[] };

export type TQuotaQueryResponse = {
  getQuotaQuery: string;
  setQuotaQuery: (val: string) => void;
};

export type TIcons = {
  icon: string;
};

export type TQuotaDataResponse = { getQuotaData: string[] };

export type TQuotaItem = {
  id: string;
  feature: string;
  request_number: string;
  quantity: number;
  status: string;
  requested_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
};

export type TQuotaParams = {
  date_from?: string;
  date_to?: string;
  page?: string;
  per_page?: string;
  search?: string;
  feature?: string;
};

export interface FeatureId {
  _id: string;
  name: string;
}

export type TQuotaResponse = TMetaResponse<TQuotaItem>;
