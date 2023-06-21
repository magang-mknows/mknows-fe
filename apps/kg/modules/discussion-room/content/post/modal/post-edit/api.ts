import { serialize } from "object-to-formdata";
import api from "../../../../../../services/api";
import { TDiscussionPayload, TDiscussionDetailResponse } from "./types";

export const DiscussionByIdRequest = async (id: string): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  return data;
};

export const UpdateDiscussion = async (
  id: string,
  payload: TDiscussionPayload,
): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.post(`/discussion/forum/${id}`, serialize(payload));
  return data;
};
