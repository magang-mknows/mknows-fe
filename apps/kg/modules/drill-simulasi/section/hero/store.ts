import DummyHistory from '../../assets/dummy-drillHistory.svg';
import { atom } from 'recoil';
import { HistorySimulation } from './type';

export const historySimulationsState = atom<Array<HistorySimulation>>({
  key: 'history-simulations-state',
  default: [
    {
      src: DummyHistory,
      title: 'Sejarah Indonesia',
      dosen: 'Pak Rungkad',
      date: '27 April 2022',
      time: '15:00',
      status: 'selesai',
      slug: '/Penganatar-Sejarah',
    },
    {
      src: DummyHistory,
      title: 'Pengantar Indonesia',
      dosen: 'Irawan Irawati',
      date: '27 April 2022',
      time: '15:00',
      status: 'belum-selesai',
      slug: '/Penganatar-Indonesia',
    },
  ],
});

// seacrh
//
export const queryScheduleSimulation = atom({
  key: 'query-schedule-simulation',
  default: '',
});
