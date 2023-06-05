import { useNavigate } from "react-router-dom";
import TokenService from "../../../../services/token";

export const useLogout = () => {
  const navigate = useNavigate();
  return {
    mutate: () => {
      TokenService.removeToken();
      navigate(0);
    },
  };
};
