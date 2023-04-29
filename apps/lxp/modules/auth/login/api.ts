import { TMetaItem } from '@mknows-frontend-services/utils';
import { TLoginPayload } from './types';
import api from '../../../services/api';

export const loginRequest = async (
  payload: TLoginPayload
): Promise<TMetaItem> => await api.post('/auth/login', payload);
