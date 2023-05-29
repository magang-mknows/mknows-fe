import api from "../../../services/api";
import { TCommentResponse, TDiscussionResponse } from "./types";

export const getDisscussionRequest = async (limit: string): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      limit,
    },
    url: "/discussion",
  });
  return data;
};

export const CommentGetByIdRequest = async (id: string): Promise<TCommentResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  return data;
};
