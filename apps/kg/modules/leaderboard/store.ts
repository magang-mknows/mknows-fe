import { atom } from 'recoil';
import { TLeaderboardItem } from './type';

export const PopupProfilLeaderborad = atom({
  key: 'modal-popup-profil-leaderboard',
  default: false,
});

export const popupGetUser = atom<TLeaderboardItem>({
  key: 'popup-get-user-2',
  default: {
    student_name: '',
    averageScore: 0,
    subjectCount: '',
  },
});
