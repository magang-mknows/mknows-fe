import { TMetaResponse } from "@/services/types";
import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type T = {
  schedule: number;
  src: StaticImageData;
  dosen: string;
  category: string;
  title: string;
  slug?: string;
  location?: string;
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

export type THistoryItem = {
  id: string;
  meeting_type: string;
  place: string;
  topic: string;
  status: string;
  assessor_name: string;
  picked_schedule: any;
  schedules: ScheduleHistory[];
};
export type ScheduleHistory = {
  date: string;
  times: string[];
};

export type TSimulationHistoryResponse = TMetaResponse<THistoryItem>;
