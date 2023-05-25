// import { TMetaResponse } from '@mknows-frontend-services/utils';

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

  

// export type TKRS = {
//   id: string;
//   faculty_id: string;
//   name: string;
//   major_head_id: string;
//   description: string;
//   thumbnail: string;
//   slug: string;
//   subject_count: number;
//   total_credit: number;
// };

// export type TKRSResponse = TMetaResponse<TKRS>;

