import { atom } from 'recoil';

export const showDetailTraining = atom({
  key: 'show-detail-training',
  default: false,
});

export const showSelectedDetail = atom({
  key: 'show-seledted-detail',
  default: '',
});
