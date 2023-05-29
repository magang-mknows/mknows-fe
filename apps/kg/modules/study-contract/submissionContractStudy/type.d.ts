import { TMetaResponse, TMetaResponseSingle } from '@mknows-frontend-services/utils';

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
  desc: string | number;
};

// ----------batas--------

export type TKRS = {
  studentTakenMajor: boolean;
  dataMajor: {
    id: string;
    name: string;
    current_semester: number;
    credit_count: number;
    head_of_major: string;
  };
  dataSubjects: [
    {
      id: string;
      name: string;
      thumbnail: string;
      enrolled_count: number;
      subject_code: string;
      credit: number;
      current_semester: number;
      session_count: number;
    }
  ];
};

export type TKRSResponse = TMetaResponseSingle<TKRS>;
