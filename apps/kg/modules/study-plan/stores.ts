import { atom, selectorFamily } from 'recoil';
import { DataCard, DataTable, OptionFaculty, OptionSubject } from './types';
import ImgChoiceFaculty2 from './assets/choicefaculty2.svg';
import Example1 from './assets/example1.svg';
import Example2 from './assets/example2.svg';

export const optionFacultyState = atom<Array<OptionFaculty>>({
  key: 'option-faculty-state',
  default: [
    {
      src: ImgChoiceFaculty2,
      deskripsi: 'Teknik',
      jumlahstudi: 6,
      slug: '/teknik',
    },
  ],
});

export const optionSubjectState = atom<Array<OptionSubject>>({
  key: 'option-subject-state',
  default: [
    {
      src: ImgChoiceFaculty2,
      faculty: 'Teknik',
      deskripsi: 'Software Engineering',
      jumlahmatkul: 14,
      sks: 131,
      slug: '/software-engineering',
    },
    {
      src: ImgChoiceFaculty2,
      faculty: 'Pendidikan',
      deskripsi: 'Seni Engineering',
      jumlahmatkul: 14,
      sks: 131,
      slug: '/seni-engineering',
    },
  ],
});

//seacrch
export const queryOptionSubject = atom({
  key: 'query-option-subject',
  default: '',
});

export const filterOptionSubject = selectorFamily({
  key: 'filter-option-subject',
  get:
    (query: string) =>
    ({ get }) =>
      get(optionSubjectState).filter((item) =>
        item.faculty.toLowerCase().includes(query)
      ),
});

export const dataStudyCardState = atom<Array<DataCard>>({
  key: 'data-card-state-2',
  default: [
    {
      label: 'Jurusan',
      desc: 'Teknik Informatika',
    },
    {
      label: 'Semester Saat ini',
      desc: '1',
    },
    {
      label: 'Total SKS',
      desc: '144',
    },
    {
      label: 'Kepala Prodi',
      desc: 'Rama S.Kom M.Kom',
    },
  ],
});

export const dataTableState = atom<Array<DataTable>>({
  key: 'data-table-state-1',
  default: [
    {
      no: 1,
      matkul: 'Bahasa Inggris',
      img: Example1,
      jmlh_mahasiswa: 15,
      kode_matkul: '124ASSA',
      jmlh_sks: 144,
      semester: 1,
      jmlh_pertemuan: 12,
      tindakan_kontrak: 'tambah',
      tindakan_draft: 'hapus',
      tindakan_pretest: 'abc.pdf',
      status: 'disetujui',
      waktu: '13/04/22 | 13.00',
      waktu_selesai: '13/12/23 | 13.00',
    },
    {
      no: 2,
      matkul: 'Kalkulus',
      img: Example2,
      jmlh_mahasiswa: 21,
      kode_matkul: '18ASDAF',
      jmlh_sks: 123,
      semester: 4,
      jmlh_pertemuan: 16,
      tindakan_kontrak: 'tambah',
      tindakan_draft: 'hapus',
      tindakan_pretest: 'Upload',
      status: 'diproses',
      waktu: '13/01/19 | 13.00',
      waktu_selesai: '11/03/24 | 16.00',
    },
  ],
});

export const PopupModalConfirmCard = atom({
  key: 'modal-popup-confirm-card-2',
  default: false,
});
