import api from '../../services/api';
import { TSimulationResponse } from './type';

export const SimulationService = async (): Promise<TSimulationResponse> => {
  const { data } = await api.get('/meeting');
  return data;
};
