import { signOut } from "next-auth/react";
import api from "../../../services/api";
import { TLogoutPayload } from "./types";

export const logoutRequest = async (payload: TLogoutPayload) => {
  await api.post("/auth/logout", payload);
  await signOut();
};
