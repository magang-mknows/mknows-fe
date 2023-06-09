import api from "../../../services/api";
import {
  TCommentResponse,
  TDiscussionPayload,
  TDiscussionResponse,
  TDiscussionSingleResponse,
} from "./types";

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get("/discussion-forums/global");
  return data;
};

export const getDisscussionDetailRequest = async (
  id: string,
): Promise<TDiscussionSingleResponse> => {
  const { data } = await api.get(`/discussion-forums/forum/${id}`);
  return data;
};

export const CommentCreateByIdRequest = async (
  id: string,
  payload: TDiscussionPayload,
): Promise<TCommentResponse> => {
  const { data } = await api.post(`/discussion-forums/comment/${id}`, payload);
  return data;
};

export const ReplyCreateByIdRequest = async (
  id: string,
  payload: TDiscussionPayload,
): Promise<TCommentResponse> => {
  const { data } = await api.post(`/discussion-forums/reply/${id}`, payload);
  return data;
};
