import api from "../../../services/api";
import { TCommentResponse, TDiscussionResponse } from "./types";

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      limit: "100",
    },
    url: "/discussion",
  });
  return data;
};

export const CommentGetByIdRequest = async (id: string): Promise<TCommentResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  return data;
};
