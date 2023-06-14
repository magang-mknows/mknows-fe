import api from "../../services/api";
import {
  TProcessParams,
  TProcessResponse,
  TRequestResponse,
  TResultByIdParams,
  TResultByIdResponse,
  TResultParams,
  TResultResponse,
} from "./types";

export const getDataRequest = async (): Promise<TRequestResponse> => {
  const { data } = await api.get("/features/all");
  return data;
};

export const getDataProcess = async (): Promise<TProcessResponse> => {
  const { data } = await api.get("requests/today/process");
  return data;
};

// process page
export const getProcessResponse = async (params: TProcessParams): Promise<TProcessResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/requests/today/process",
    params,
  });
  return data;
};

// result page
export const getResultResponse = async (params: TResultParams): Promise<TResultResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/requests/today",
    params,
  });
  return data;
};

// result ById
export const getResultById = async (params: TResultByIdParams): Promise<TResultByIdResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/requests/user/" + params?.id,
    params,
  });
  return data;
};
