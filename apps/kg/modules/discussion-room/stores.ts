import { atom } from 'recoil';
import { TDiscussionItem } from './component/types';

// Popup Stores

export const PopupModalCreateDiscussion = atom({
  key: 'modal-popup-create-discussion',
  default: false,
});
export const PopupModalEditDiscussion = atom({
  key: 'modal-popup-edit-discussion',
  default: false,
});
export const PopupModalDeleteDiscussion = atom({
  key: 'modal-popup-delete-discussion',
  default: false,
});
export const PopupModalReportDiscussion = atom({
  key: 'modal-popup-report-discussion',
  default: false,
});
export const PopupModalSuccessDiscussion = atom({
  key: 'modal-popup-success-discussion',
  default: false,
});

// Api Stores

export const popupGetUser = atom<TDiscussionItem>({
  key: 'popup-get-user',
  default: {
    id: '',
    user_id: '',
    session_id: '',
    title: '',
    content: '',
    is_global: true,
    images: [],
  },
});

export const setid = atom({
  key: 'id-dicussion',
  default: '',
});
