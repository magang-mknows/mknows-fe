import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TReportDataDummy = {
  no: number;
  nik: number;
  nama: string;
  status: string;
  jumlah_user?: number;
  jenis_produk?: string;
  tggl_permintaan?: string;
  waktu_permintaan?: string;
  waktu_selesai?: string;
  tggl_selesai?: string;
};

export type TReportDataResponse = { getReportData: TReportDataDummy[] };

export type TReportQueryResponse = {
  getReportQuery: string;
  setReportQuery: (val: string) => void;
};

export type TReportCustItems = {
  _id?: string;
  name: string;
  nik: string;
  requests: Array<{
    id: string;
    request_number: string;
    feature_name: string;
    requested_at: string;
    result: string;
    document: string;
  }>;
};

export type TReportCustResponse = TMetaResponse<TReportCustItems>;

export type TReportRequestItems = {
  _id: string;
  request_number: string;
  feature: string;
  finished_at: string;
  requested_at: string;
  total_user: number;
  user_requests: TReportRequestUsersItem[];
};

export type TReportRequestUsersItem = {
  _id: string;
  nik: string;
  name: string;
  date_requested: string;
  result: string;
  document: string;
};

export type TReportRequestResponse = TMetaResponse<TReportRequestItems>;
