import api from "../../../../../services/api";
import { TDiscussionResponse } from "./types";

export const getDisscussionRequest = async (id: string): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      session_id: id,
    },
    url: "/discussion",
  });
  return data;
};

export const getDisscussionRequestById = async (id: string): Promise<TDiscussionResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  return data;
};
