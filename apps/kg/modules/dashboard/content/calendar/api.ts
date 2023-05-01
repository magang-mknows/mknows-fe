import api from '../../../../services/api';
import { TCalendarResponse } from './types';

export const calendarScheduleRequest = async (): Promise<TCalendarResponse> => {
  const { data } = await api.get('/calendar/schedule');
  return data;
};
