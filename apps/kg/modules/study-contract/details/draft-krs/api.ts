import api from "../../../../services/api";
import { TRoot, TDraftSubject } from "./type";

export const draftRequest = async (
    id: string | number,
    payload: TRoot,
  ): Promise<TDraftSubject> => {
    const { data } = await api.post(`/student-subject/draft/${id}`, payload);
    return data;
  };