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
};

export type TRequestDummyData = {
  icon: string;
  name: string;
  totalData: number;
  totalNotifikasi: number;
  category: string;
};

export type TRequestDataResponse = { getRequestData: TRequestDummyData[] };

export type TResultDataResponse = { getResultData: TResultDataDummy[] };

export type TResultQueryResponse = {
  getResultQuery: string;
  setResultQuery: (val: string) => void;
};
