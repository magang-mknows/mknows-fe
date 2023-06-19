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

export type TReportCustitems = {
  _id?: string;
  name: string;
  nik: string;
  requests: Array[{
    id: string;
    request_number: string;
    feature_name: string;
    requested_at: string;
    result: string;
    document: string;
  }];
};

export type TReportCustResponse = TMetaResponse<TReportCustitems>;
