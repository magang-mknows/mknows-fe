import api from '../../services/api';
import { TCertificate } from './type';

export const certificateGetRequest = async (): Promise<TCertificate> => {
  const { data } = await api.get(`/certificate`);
  return data;
};
