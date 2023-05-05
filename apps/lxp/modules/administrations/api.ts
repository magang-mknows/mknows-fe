import api from '../../services/api';
import { TAdministrationResponse } from './type';

export const getAdministrationRequest =
  async (): Promise<TAdministrationResponse> => {
    const { data } = await api.get('/administrations/me');
    return data;
  };

  export const privateInformationRequest = async (
    payload: TAdministrationResponse
  ): Promise<TAdministrationResponse> => {
    const { data } = await api.post('/administrations', payload);
    return data;
  };

