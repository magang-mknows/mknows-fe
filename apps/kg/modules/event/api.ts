import api from "../../services/api";
import { TEventParams, TEventPayload, TEventResponse } from "./types";

export const eventGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get("/event");
  return data;
};

export const eventGetByIdRequest = async (id: string | number): Promise<TEventResponse> => {
  const { data } = await api.get(`/event/${id}`);
  return data;
};

export const eventCreateRequest = async (payload: TEventPayload): Promise<TEventResponse> => {
  const { data } = await api.post("/event", payload);
  return data;
};

export const eventUpdateRequest = async (payload: TEventPayload): Promise<TEventResponse> => {
  const { data } = await api.put(`/event/${payload.id}`, payload);
  return data;
};

export const eventDeleteRequest = async (params: TEventParams): Promise<TEventResponse> => {
  const { data } = await api.delete(`/event/${params.id}`);
  return data;
};
