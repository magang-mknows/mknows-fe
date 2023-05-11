import { atom } from 'recoil';
import { Data } from './types';
import Icon from './assets/mahasiswa.svg';
import Icon2 from './assets/matkul.svg';
import Icon3 from './assets/sks.svg';
import Icon4 from './assets/semester.svg';

export const dataCardState = atom<Array<Data>>({
  key: 'option-faculty-state',
  default: [
    { icon: Icon, jumlah: '-', detail: 'mahasiswa', warna: '#E9F6FD' },
    { icon: Icon2, jumlah: '-', detail: 'matkul', warna: '#E3FBDA' },
    { icon: Icon3, jumlah: '-', detail: 'sks', warna: '#FEF6D0' },
    { icon: Icon4, jumlah: '-', detail: 'semester', warna: '#E9F6FD' },
  ],
});
