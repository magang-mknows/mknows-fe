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

export type TResultQueryResponse = {
  getResultQuery: string;
  setResultQuery: (val: string) => void;
};
