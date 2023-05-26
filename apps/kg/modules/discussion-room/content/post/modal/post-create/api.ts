import { serialize } from "object-to-formdata";
import api from "../../../../../../services/api";
import { TDiscussionPayload, TDiscussionDetailResponse } from "./types";

export const profileRequest = async (): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.get("/user/profile/me");
  return data;
};

export const CreateDiscussion = async (
  payload: TDiscussionPayload,
): Promise<TDiscussionDetailResponse> => {
  const { data } = await api.post("/discussion", serialize(payload));
  return data;
};
