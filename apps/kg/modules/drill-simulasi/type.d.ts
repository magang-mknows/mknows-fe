import { TMetaResponse } from '@/services/types';

export type T = {
  schedule: number;
  src: StaticImageData;
  dosen: string;
  category: string;
  title: string;
  slug?: string;
  location?: string;
};

export type HistorySimulation = {
  src: StaticImageData;
  title: string;
  dosen: string;
  date: string;
  time: string;
  status: string;
  slug: string;
};

export type ReturnTypesPopupSubmissionStatus = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type TSimulationItem = {
  id: string;
  meeting_type: string;
  place: string;
  topic: string;
  status: string;
  assessor_name: string;
  picked_schedule: any;
  schedules: Schedule[];
};

export type Schedule = {
  date: string;
  times: string[];
};

export type TSimulationResponse = TMetaResponse<TSimulationItem>;
