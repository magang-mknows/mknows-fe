import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TResultDataDummy = {
  no: number;
  nik: number;
  nama: string;
  tggl_permintaan: string;
  waktu_permintaan: string;
  waktu_selesai: string;
  tggl_selesai: string;
  kendala_proses: string;
  skor: string;
  detail: string;
  jenis_produk: string;
  jumlah_kuota: number;
  status: string;
  jumlah_user: number;
};

export type TIcons = {
  icon: string;
};

export type TRequestDataResponse = { getRequestData: string[] };

export type TResultDataResponse = { getResultData: TResultDataDummy[] };

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

export type TProcessResponse = TMetaResponse<TProcessItem>;

export type TProcessParams = {
  search?: string;
  feature?: string;
  per_page?: string;
  page?: string;
};
