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

export type TCalendarResponse = TMetaResponseSingle<TCalendar>;
