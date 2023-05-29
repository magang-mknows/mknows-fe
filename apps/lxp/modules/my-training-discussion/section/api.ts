import api from "../../../services/api";
import { TCommentResponse, TDiscussionPayload, TDiscussionResponse } from "./types";

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get("/discussion-forums/global");
  return data;
};

export const CommentGetByIdRequest = async (id: string): Promise<TCommentResponse> => {
  const { data } = await api.get(`/discussion-forums/comment/:discussion_forum_id/${id}`);
  return data;
};

export const CommentCreateByIdRequest = async (
  id: string,
  payload: TDiscussionPayload,
): Promise<TCommentResponse> => {
  const { data } = await api.post(`/discussion-forums/comment/${id}`, payload);
  return data;
};
