import { TMetaItem } from "@mknows-frontend-services/utils";
import { TRegisterPayload } from "./types";
import api from "../../../services/api";

export const registerRequest = async (payload: TRegisterPayload): Promise<TMetaItem> =>
  await api.post("/auth/register", payload);
