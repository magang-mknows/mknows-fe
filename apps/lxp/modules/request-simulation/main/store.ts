import { atom } from 'recoil';

export const selectedDateSimulation = atom({
  key: 'selected-date-simulation',
  default: {
    date: '',
    time: '',
  },
});

export const successPopupState = atom({
  key: 'show-suceess-popup',
  default: false,
});
