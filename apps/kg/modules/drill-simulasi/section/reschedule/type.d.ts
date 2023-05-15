export type CategorySimulationTypes = {
  setCategorySimulation: (val: string) => void;
  getCategorySimulation: string;
};

export type ScheduleTypes = {
  setScheduleSimulation: (val: boolean) => void;
  getScheduleSimulation: boolean;
};

export type ChooseSimulationTypes = {
  setChooseSimulation: (val: string) => void;
  getChooseSimulation: string;
};

export type ReturnTypesPopupScheduleStatus = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type ChooseTimeSimulasiTypes = {
  setChooseTimeSimulation: (val: string) => void;
  getChooseTimeSimulation: string;
};

export type RescheduleSimulation = {
  date: string;
  time: Array<Time>;
};

export type Time = {
  time: string;
};

// dummy

export type T = {
  topic: string;
};
