import { serialize } from "object-to-formdata";
import api from "../../../services/api";
import { TMyStudyAssignmentResponse, TMyStudyAssignmentSubmissionPayload } from "./type";

export const assignmentGetRequest = async (
  id: string | number,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.get(`/studi-ku/assignment/session/${id}`);
  return data;
};

export const assignmentSubmissionRequest = async (
  payload: TMyStudyAssignmentSubmissionPayload,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.put(
    `/studi-ku/assignment/session/${payload.id}/submission`,
    serialize(payload.req),
  );
  return data;
};
