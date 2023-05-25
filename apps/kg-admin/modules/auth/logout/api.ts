import { signOut } from 'next-auth/react';
import api from '../../../services/api';

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  await api.post('/auth/logout', { refresh_token });
  signOut();
};
