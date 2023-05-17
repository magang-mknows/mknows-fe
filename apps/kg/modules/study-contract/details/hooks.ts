import { useRecoilState } from 'recoil';
import {
  dataTableState,
  PopupModalConfirmStatus,
  PopupModalSuccessConversi,
  PopupModalAddStudy,
  PopupModalDeleteStudy,
  PopupUploadStudyPlanState,
  PopupDeleteStudyPlanState,
  PopupSubmissionStudyPlanState
} from './stores';
import { DataTable } from './type';

type ReturnTypeAddStudy = {
  setPopupAdd: (val: boolean) => void;
  getPopupAdd: boolean;
};

export const usePopupAddStudy = (): ReturnTypeAddStudy => {
  const [get, set] = useRecoilState(PopupModalAddStudy);
  return {
    setPopupAdd: (val: boolean) => set(val),
    getPopupAdd: get,
  };
};

type ReturnType = {
  setPopupSuccess: (val: boolean) => void;
  getPopupSuccess: boolean;
};

export const usePopupSucces = (): ReturnType => {
  const [get, set] = useRecoilState(PopupModalSuccessConversi);
  return {
    setPopupSuccess: (val: boolean) => set(val),
    getPopupSuccess: get,
  };
};

type DataTableTypes = {
  setDataTable: (val: Array<DataTable>) => void;
  getDataTable: Array<DataTable>;
};

export const useDataTable = (): DataTableTypes => {
  const [getDataTable, setDataTable] = useRecoilState(dataTableState);
  return {
    setDataTable: (val: Array<DataTable>) => setDataTable(val),
    getDataTable: getDataTable,
  };
};

type ReturnTypesConfirm = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmStatus = (): ReturnTypesConfirm => {
  const [get, set] = useRecoilState(PopupModalConfirmStatus);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

type ReturnTypeDeleteStudy = {
  setPopupDelete: (val: boolean) => void;
  getPopupDelete: boolean;
};

export const usePopupDeleteStudy = (): ReturnTypeDeleteStudy => {
  const [get, set] = useRecoilState(PopupModalDeleteStudy);
  return {
    setPopupDelete: (val: boolean) => set(val),
    getPopupDelete: get,
  };
};

type ReturnTypeUpload = {
  setPopupUploadStatus: (val: boolean) => void;
  popupUploadStatus: boolean;
};

export const usePopupUploadStudyPlan = (): ReturnTypeUpload => {
  const [get, set] = useRecoilState(PopupUploadStudyPlanState);
  return {
    setPopupUploadStatus: (val: boolean) => set(val),
    popupUploadStatus: get,
  };
};

type ReturnTypePopupDelete = {
  popupDeleteStatus: boolean;
  setPopupDeleteStatus: (val: boolean) => void;
};

export const usePopupDeleteStudyPlan = (): ReturnTypePopupDelete => {
  const [get, set] = useRecoilState(PopupDeleteStudyPlanState);
  return {
    popupDeleteStatus: get,
    setPopupDeleteStatus: (val: boolean) => set(val),
  };
};

type ReturnTypePopupSubmission = {
  popupSubmissionStatus: boolean;
  setPopupSubmissionStatus: (val: boolean) => void;
};

export const usePopupSubmissionStudyPlan = (): ReturnTypePopupSubmission => {
  const [get, set] = useRecoilState(PopupSubmissionStudyPlanState);
  return {
    popupSubmissionStatus: get,
    setPopupSubmissionStatus: (val: boolean) => set(val),
  };
};
