import api from "../../../../services/api";
import { TDraftSubject, TDraftPayload } from "./type";

export const draftRequest = async (
    payload: TDraftPayload,
  ): Promise<TDraftSubject> => {
    const { data } = await api.post(`/student-subject/draft/${payload.id}`, payload);
    return data;
  };