import { useRecoilState } from 'recoil';
import {
  dataTableState,
  PopupModalConfirmStatus,
  PopupModalSuccessConversi,
  PopupModalAddStudy,
  PopupModalDeleteStudy,
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
