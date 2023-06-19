import { FC, ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import TokenService from "../../../services/token";

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
