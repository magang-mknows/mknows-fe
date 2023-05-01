import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TFaculty = {
  id: string;
  name: string;
  majors_count: number;
  thumbnail: string;
  slug: string;
  faculty_id: string;

};

export type TFacultyResponse = TMetaResponseSingle<TFaculty>;


import { StaticImageData } from 'next/image';

export type OptionFaculty = {
  src: StaticImageData;
  deskripsi: string;
  jumlahstudi: number;
  slug: string;
};

export type OptionSubject = {
  src: StaticImageData;
  deskripsi: string;
  jumlahmatkul: number;
  sks: number;
  slug: string;
  faculty: string;
};

export type DataCard = {
  label: string;
  desc: string;
};

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

import { StaticImageData } from 'next/image';

export type OptionFaculty = {
  src: StaticImageData;
  deskripsi: string;
  jumlahstudi: number;
  slug: string;
};

export type OptionSubject = {
  src: StaticImageData;
  deskripsi: string;
  jumlahmatkul: number;
  sks: number;
  slug: string;
  faculty: string;
};

export type DataCard = {
  label: string;
  desc: string;
};

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
