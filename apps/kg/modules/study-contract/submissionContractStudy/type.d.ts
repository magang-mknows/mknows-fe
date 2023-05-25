export type DataTable = {
  no: number;
  matkul: string;
  img: StaticImageData;
  jmlh_mahasiswa: number;
  kode_matkul: string;
  jmlh_sks: number;
  semester: number;
  jmlh_pertemuan: number;
  tindakan_kontrak: string;
  tindakan_draft: string;
  tindakan_pretest: string;
  status: string;
  waktu: string;
  waktu_selesai: string;
};

export type DataCard = {
  label: string;
  desc: string;
};
