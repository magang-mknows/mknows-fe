import api from "../../services/api";
import {
  TBiodataAdm,
  TBiodataResponse,
  TFamilyAdm,
  TFamilyResponse,
  TFileAdm,
  TFileResponse,
  TConstantsResponse,
} from "./types";
import { serialize } from "object-to-formdata";

export const getAdmRequest = async (): Promise<TBiodataResponse> => {
  const { data } = await api.get("/administration");
  return data;
};

export const privateInformationRequest = async (
  payload: TBiodataAdm,
): Promise<TBiodataResponse> => {
  const { data } = await api.post("/administration/biodata", payload);
  return data;
};

export const familyInformationRequest = async (payload: TFamilyAdm): Promise<TFamilyResponse> => {
  const { data } = await api.post("/administration/familial", payload);
  return data;
};

export const fileInformationRequest = async (payload: TFileAdm): Promise<TFileResponse> => {
  const { data } = await api.post("/administration/file", serialize(payload));
  return data;
};

export const constantsRequest = async (): Promise<TConstantsResponse> => {
  const { data } = await api.get("/administration/constants");
  return data;
};
