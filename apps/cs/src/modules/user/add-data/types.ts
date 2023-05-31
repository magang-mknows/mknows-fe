import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TIdentityFile = {
  user_id?: string;
  ktp?: File;
  selfie?: File;
  surat_nomor_induk_berusaha?: File;
  surat_izin_usaha_perdagangan?: File;
  surat_nomor_akta_notaris?: File;
  surat_keterangan_domisili_usaha?: File;
  npwp?: File;
  surat_tanda_daftar_perusahaan?: File;
};

export type TIdentityResponse = TMetaResponseSingle<TIdentityFile>;

export type TCapabilityFile = {
  user_id?: string;
  ktp?: File;
  selfie?: File;
  surat_nomor_induk_berusaha?: File;
  surat_izin_usaha_perdagangan?: File;
  surat_nomor_akta_notaris?: File;
  surat_keterangan_domisili_usaha: File;
  npwp: File;
  surat_tanda_daftar_perusahaan: File;
  form_credit_applicant: File;
  surat_laporan_keuangan: File;
};

export type TCapabilityResponse = TMetaResponseSingle<TCapabilityFile>;
