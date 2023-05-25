import { atom } from 'recoil';

export const askDepartmentPopup = atom({
  key: 'ask-department-popup',
  default: false,
});

export const workPlanStatus = atom({
  key: 'work-plan-status',
  default: '',
});
