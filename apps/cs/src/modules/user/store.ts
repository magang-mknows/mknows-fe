import { atom, selector } from 'recoil';
import { TUserDataDummy } from './types';

export const userSearch = atom({
  key: 'user-query',
  default: '',
});

export const userDummyData = atom<TUserDataDummy[]>({
  key: 'user-dummy-data',
  default: [
    {
      no: 1,
      nik: 327000189266,
      nama: 'Ludwig van Biethoven',
      tanggal: '02/08/22 09:23:30',
      berkas: 'success',
    },
    {
      no: 2,
      nik: 327012111,
      nama: 'Putri Santoso',
      tanggal: '10/08/21 09:26:30',
      berkas: 'failed',
    },
    {
      no: 3,
      nik: 327000189266,
      nama: 'Albert Maniqueen',
      tanggal: '02/10/22 07:23:30',
      berkas: 'failed',
    },
    {
      no: 4,
      nik: 327012111,
      nama: 'Yasmin Sumbul',
      tanggal: '11/12/23 08:15:30',
      berkas: 'success',
    },
    {
      no: 5,
      nik: 327012111,
      nama: 'Restu Sugiarto Nasution',
      tanggal: '17/8/21 09:20:30',
      berkas: 'success',
    },
    {
      no: 6,
      nik: 320114573453,
      nama: 'Jawadal Al-Hilal',
      tanggal: '02/08/22 09:23:30',
      berkas: 'success',
    },
    {
      no: 7,
      nik: 320114573454,
      nama: 'Ben Nurul Mustafa',
      tanggal: '11/12/23 08:15:30',
      berkas: 'success',
    },
  ],
});

export const userFilter = selector({
  key: 'user-filter',
  get: ({ get }) =>
    get(userDummyData).filter(
      (user) =>
        user.nama.toLowerCase().includes(get(userSearch).toLowerCase()) ||
        user.nik
          .toString()
          .toLowerCase()
          .includes(get(userSearch).toLowerCase()) ||
        user.tanggal
          .toString()
          .toLowerCase()
          .includes(get(userSearch).toLowerCase())
    ),
});

export const CategoryStatusState = atom({
  key: 'category-status-state',
  default: 'none',
});

export const IdentityStatusState = atom({
  key: 'identity-status-state',
  default: false,
});

export const CharacterStatusState = atom({
  key: 'character-status-state',
  default: false,
});

export const CapabilityStatusState = atom({
  key: 'capability-status-state',
  default: false,
});
