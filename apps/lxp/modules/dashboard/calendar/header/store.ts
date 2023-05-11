import { atom } from 'recoil';

const now = new Date();

export const selectedDate = atom({
  key: 'selected-date',
  default: now,
});
