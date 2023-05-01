import api from '../../../services/api';
import { TCalendarResponse } from './type';

export const calendarScheduleRequest = async (): Promise<TCalendarResponse> => {
  const { data } = await api.get('/calendar/schedule');
  return data;
};
