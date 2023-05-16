import { atom } from "recoil";
import { DataTable } from "./type";
import Example1 from "../assets/example1.svg";
import Example2 from "../assets/example2.svg";

export const dataTableState = atom<Array<DataTable>>({
    key: "data-table-study-contract",
    default: [
      {
        no: 1,
        matkul: "Bahasa Inggris",
        img: Example1,
        jmlh_mahasiswa: 15,
        kode_matkul: "124ASSA",
        jmlh_sks: 144,
        semester: 1,
        jmlh_pertemuan: 12,
        tindakan_kontrak: "tambah",
        tindakan_draft: "hapus",
        tindakan_pretest: "abc.pdf",
        status: "disetujui",
        waktu: "13/04/22 | 13.00",
        waktu_selesai: "13/12/23 | 13.00",
      },
      {
        no: 2,
        matkul: "Kalkulus",
        img: Example2,
        jmlh_mahasiswa: 21,
        kode_matkul: "18ASDAF",
        jmlh_sks: 123,
        semester: 4,
        jmlh_pertemuan: 16,
        tindakan_kontrak: "tambah",
        tindakan_draft: "hapus",
        tindakan_pretest: "Upload",
        status: "diproses",
        waktu: "13/01/19 | 13.00",
        waktu_selesai: "11/03/24 | 16.00",
      },
    ],
  });

  export const PopupModalConfirmStatus = atom({
    key: "modalPopup-confirmStatus-studyContract",
    default: false,
  });

  export const PopupModalSuccessConversi = atom({
    key: "modalPopup-successConversi-studyContract",
    default: false,
  });

  export const PopupModalAddStudy = atom({
    key: "modalPopup-addStudy-studyContract",
    default: false,
  });

  export const PopupModalDeleteStudy = atom({
    key: "modalPopup-deleteStudy-studyContract",
    default: false,
  });