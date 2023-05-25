import { TMetaResponse } from "@mknows-frontend-services/utils";

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
