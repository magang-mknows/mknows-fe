import api from "../../../services/api";
import { TAssignmentResponse, TAssignmentSubmissionPayload } from "./type";

export const assignmentGetRequest = async (id: string | number): Promise<TAssignmentResponse> => {
  const { data } = await api.get(`/studi-ku/assignment/session/${id}`);
  return data;
};

export const assignmentSubmissionRequest = async (
  id: string,
  payload: TAssignmentSubmissionPayload,
): Promise<TAssignmentResponse> => {
  const { data } = await api.put(`/studi-ku/assignment/session/${id}/submission`, payload);
  return data;
};
