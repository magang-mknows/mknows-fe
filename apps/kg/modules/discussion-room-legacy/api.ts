import api from "../../services/api";
import {
  TDiscussionPayload,
  TDiscussionResponse,
  TDiscussionSingleResponse,
} from "./component/types";

export const createDisscussionRequest = async (
  payload: TDiscussionPayload,
): Promise<TDiscussionSingleResponse> => {
  const { data } = await api.post("/discussion/", payload);
  return data;
};

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get("/discussion");
  return data;
};
