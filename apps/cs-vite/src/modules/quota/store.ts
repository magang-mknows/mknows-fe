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

export const resultDummyData = atom<TResultDataDummy[]>({
  key: 'result-dummy-data',
  default: [
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Proses',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 20,
    },
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Berhasil',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 20,
    },
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Proses',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 20,
    },
    {
      no: 10002345,
      tggl_permintaan: '11/2/2021',
      skor: 'Batal',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 20,
    },
  ],
});

export const resultFilter = selector({
  key: 'result-filter',
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.jenis_produk
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.no
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase())
    ),
});
