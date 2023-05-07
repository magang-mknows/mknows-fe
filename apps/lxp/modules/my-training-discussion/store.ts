import { atom } from "recoil";
import { Sidebar } from "./type";

export const discussionSidebar = atom<Array<Sidebar>>({
  key: "discussion-Mystudy",
  default: [
    {
      id: "1",
      session: "Pertemuan 1",
      modul: [
        {
          id: "1",
          modul: "Module 1",
        },
        {
          id: "2",
          modul: "Module 2",
        },
      ],
    },
    {
      id: "2",
      session: "Pertemuan 2",
      modul: [
        {
          id: "3",
          modul: "Module 1",
        },
        {
          id: "4",
          modul: "Module 2",
        },
      ],
    },
  ],
});

export const chooseSidebar = atom({
  key: "choose-sidebar",
  default: "",
});

export const PopupModalSuccessOpen = atom({
  key: 'modal-popup-success',
  default: false,
});

export const PopupModalScheduleOpen = atom({
  key: 'modal-popup-schedule',
  default: false,
});

export const PopupModalSubmissionOpen = atom({
  key: 'modal-popup-submission',
  default: false,
});
export const PopupModalConfirmCard = atom({
  key: 'modal-popup-confirm',
  default: false,
});

export const PopupModalConfirmModul = atom({
  key: 'modal-popup-confirmModul',
  default: false,
});

export const PopupModalConfirmStatus = atom({
  key: 'modal-popup-confirmStatus',
  default: false,
});

export const PopupModalSuccessConversi = atom({
  key: 'modal-popup-successConversi',
  default: false,
});

export const PopupModalAddStudy = atom({
  key: 'modal-popup-addStudy',
  default: false,
});
export const PopupModalDeleteStudy = atom({
  key: 'modal-popup-deleteStudy',
  default: false,
});

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
export const GetFile = atom({
  key: 'get-file',
  default: '',
});

export const PopupUploadStudyPlanState = atom({
  key: 'modal-popup-upload-StudyPlan',
  default: false,
});

export const PopupSubmissionStudyPlanState = atom({
  key: 'modal-popup-submission-StudyPlan',
  default: false,
});

export const PopupDeleteStudyPlanState = atom({
  key: 'modal-popup-delete-StudyPlan',
  default: false,
});

export const PopupSuccessStudyPlanState = atom({
  key: 'modal-popup-success-StudyPlan',
  default: false,
});
