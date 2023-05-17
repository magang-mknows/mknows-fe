import { atom, selector } from 'recoil';
import { TResultDataDummy } from './types';

export const resultSearch = atom({
  key: 'result-query',
  default: '',
});

export const resultOption = atom({
  key: 'result-option-query',
  default: '',
});

export const quotaDummyData = atom<TResultDataDummy[]>({
  key: 'quota-dummy-data',
  default: [
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Proses',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 100,
    },
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Berhasil',
      jenis_produk: 'AI Documentation Verification',
      jumlah_kuota: 50,
    },
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Proses',
      jenis_produk: 'AI Condition Analysis',
      jumlah_kuota: 80,
    },
    {
      no: 99,
      tggl_permintaan: '11/2/2021',
      skor: 'Batal',
      jenis_produk: 'AI Digital FootPrint',
      jumlah_kuota: 20,
    },
  ],
});

export const resultFilter = selector({
  key: 'result-filter',
  get: ({ get }) =>
    get(quotaDummyData).filter(
      (user) =>
        user.skor.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.tggl_permintaan
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.jenis_produk
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.no
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.jumlah_kuota
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase())
    ),
});
