import { TMetaResponse } from "@mknows-frontend-services/utils";
import { TDashboardCalendar } from "../../types";

type TCalendarItems = {
  id: string;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
  allDay: boolean;
};

type TCalendar = {
  code: number;
  status: string;
  message: string;
  data: TCalendarItems[];
};

export type TCalendarResponse = TMetaResponse<TCalendar>;

export type TFilteredCalendar = {
  date: Date;
  items: Array<TDashboardCalendar> | null | undefined;
};
