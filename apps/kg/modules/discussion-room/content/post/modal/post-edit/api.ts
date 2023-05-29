import { serialize } from "object-to-formdata";
import api from "../../../../../../services/api";
import { TDiscussionPayload, TDiscussionDetailResponse } from "./types";

export const DiscussionByIdRequest = async (id: string): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  // console.log(id, "3");
  return data;
};

export const CreateDiscussion = async (
  payload: TDiscussionPayload,
): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.post("/discussion", serialize(payload));
  return data;
};
