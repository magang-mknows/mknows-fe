import { TMetaResponse } from '@mknows-frontend-services/utils';

export type TRequestDummyData = {
  icon: string;
  name: string;
  totalData: number;
  totalNotifikasi: number;
  category: string;
};

export type TRequestDataResponse = { getRequestData: TRequestDummyData[] };

export type TResultDataDummy = {
  no: number;
  tggl_permintaan: string;
  skor: string;
  jenis_produk: string;
  jumlah_kuota: number;
};

export type TResultDataResponse = { getResultData: TResultDataDummy[] };

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
  feature_id: FeatureId;
  request_number: string;
  quantity: number;
  status: string;
  requested_by: string;
  created_at: string;
  updated_at: string;
  __v: number;
};

export interface FeatureId {
  _id: string;
  name: string;
}

export type TQuotaResponse = TMetaResponse<TQuotaItem>;
