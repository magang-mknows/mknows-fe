import {
  optionFacultyState,
  dataTableState,
  dataStudyCardState,
  PopupModalConfirmCard,
} from "./stores";
import { OptionFaculty, DataTable, DataCard } from "./types";
import { useRecoilState } from "recoil";

type OptionFacultyTypes = {
  setOptionFaculty: (val: Array<OptionFaculty>) => void;
  getOptionFaculty: Array<OptionFaculty>;
};

export const useOptionFaculty = (): OptionFacultyTypes => {
  const [getOptionFaculty, setOptionFaculty] = useRecoilState(optionFacultyState);
  return {
    setOptionFaculty: (val: Array<OptionFaculty>) => setOptionFaculty(val),
    getOptionFaculty: getOptionFaculty,
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

type DataCardTypes = {
  setDataCard: (val: Array<DataCard>) => void;
  getDataCard: Array<DataCard>;
};

export const useDataCard = (): DataCardTypes => {
  const [getDataCard, setDataCard] = useRecoilState(dataStudyCardState);
  return {
    setDataCard: (val: Array<DataCard>) => setDataCard(val),
    getDataCard: getDataCard,
  };
};

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmCardStudy = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalConfirmCard);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
