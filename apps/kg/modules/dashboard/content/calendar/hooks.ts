import { useRecoilState, useRecoilValue } from "recoil";
import {
  dashboardMatchedCalendarState,
  filteredCalendarState,
  limitedCalendarState,
} from "./store";
import { TDashboardCalendar } from "../../types";

export const useMatchCalendarByDate = () => {
  const filteredCalendar = useRecoilValue(filteredCalendarState);
  const [getMatch, setMatch] = useRecoilState(dashboardMatchedCalendarState);

  function matchHandler(val: Date) {
    const foundCalendarByDate = filteredCalendar.find((fil) => val === fil.date);
    return foundCalendarByDate?.items;
  }

  return {
    getMatchedCalendar: getMatch,
    setMatchedCalendar: (val: Date) => setMatch(matchHandler(val) as Array<TDashboardCalendar>),
  };
};

export const useLimitedCalendar = () => {
  const limitCalendarData = useRecoilValue(limitedCalendarState);
  return {
    getLimitedCalendar: limitCalendarData,
  };
};

export const useFilteredCalendar = () => {
  const filteredCalendarData = useRecoilValue(filteredCalendarState);
  return {
    getFilteredCalendar: filteredCalendarData,
  };
};
