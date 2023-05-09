import { atom } from 'recoil';

export const PopupModalEditDiscussion = atom({
  key: 'modal-popup-edit-discussion',
  default: false,
});

export const PopupModalDeleteDiscussion = atom({
  key: 'modal-popup-delete-discussion',
  default: false,
});
