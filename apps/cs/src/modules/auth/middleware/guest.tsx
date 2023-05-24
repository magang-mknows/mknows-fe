import { FC, ReactNode } from 'react';
import TokenService from '../../../services/token';
import { useLocation, Navigate } from 'react-router-dom';

export const Guest: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuthenticated = !!TokenService.getToken();
  const Location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/dashboard/home" state={{ from: Location }} replace />;
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
};
