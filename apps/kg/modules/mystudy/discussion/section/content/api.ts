import api from "../../../../../services/api";
import { TDiscussionResponse } from "./types";

export const getDisscussionReq = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get("/discussion?session_id=6bc3b730-8c7d-41f0-a1dc-03bac621a824");
  return data;
};

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
