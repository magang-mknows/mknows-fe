import api from "../../../../../../services/api";
import { TDiscussionDetailResponse } from "./types";

export const DiscussionDeleteById = async (id: string): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.delete(`/discussion/forum/${id}`);
  return data;
};
