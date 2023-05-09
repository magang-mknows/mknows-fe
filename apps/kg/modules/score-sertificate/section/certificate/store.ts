import { atom } from 'recoil';
import { certificateTypes } from './type';

export const PopupModalSuccessOpen = atom({
  key: 'modal-popup-success',
  default: false,
});

export const ShowDetailStatus = atom({
  key: 'ShowDetailStatus',
  default: false,
});

export const CertificateStatus = atom<Array<certificateTypes>>({
  key: 'certificate-status',
  default: [
    {
      id: 1,
      name: 'tes',
      role: 'Webinar',
      type: 'webinar',
      urlDownload: '',
    },
  ],
});
