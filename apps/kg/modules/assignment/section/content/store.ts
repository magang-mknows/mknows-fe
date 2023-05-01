import { atom } from 'recoil';
import { T } from './types';

export const assigmentState = atom<Array<T>>({
  key: 'administration-state',
  default: [
    {
      id: 1,
      title: 'jalan hidup ninja',
      course: 'Japanese-anime',
      category: 'terlambat',
      date: '20-09-2021',
      time: '20:00:00',
    },
    {
      id: 2,
      title: 'tes',
      course: 'Japanese-culture',
      category: 'selesai',
      date: '20-09-2021',
      time: '20:00:00',
    },
  ],
});
