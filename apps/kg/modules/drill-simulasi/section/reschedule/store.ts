import { atom, selectorFamily } from 'recoil';
import { T } from './type';

export const categorySimulationState = atom({
  key: 'category-simulation-state',
  default: '',
});
export const chooseScheduleState = atom({
  key: 'choose-schedule-state',
  default: false,
});
export const chooseSimulasiState = atom({
  key: 'reschedule-simulasi-state',
  default: '',
});
export const PopupModalScheduleOpen = atom({
  key: 'modal-popup-schedule',
  default: false,
});
export const ChooseTimeSimulasiState = atom({
  key: 'reschedule-time-simulasi-state',
  default: '',
});

// filter dummy
export const sceduleSimulationState = atom<Array<T>>({
  key: 'scedule-simulation-state',
  default: [
    {
      topic: 'Sejarah Indonesia',
    },
    {
      topic: 'Bahasa Jawa',
    },
  ],
});

export const filterSlug = selectorFamily({
  key: 'filter-slug-subject',
  get:
    (query: string) =>
    ({ get }) =>
      get(sceduleSimulationState).filter((item) =>
        (item.topic as string).includes(query)
      ),
});
