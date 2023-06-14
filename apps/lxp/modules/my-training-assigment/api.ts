import { serialize } from "object-to-formdata";
import api from "../../services/api";
import { TMyStudyAssignmentResponse, TMyStudyAssignmentSubmissionPayload } from "./type";

export const assignmentGetRequest = async (
  id: string | number,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.get(`/my-works/assignment/session/847e1216-3bc4-4fef-8b6e-78d045c16ad9/batch/f86fb3b9-e852-4bde-97a6-719489911f88/data`);
  return data;
};

export const assignmentSubmissionRequest = async (
  payload: TMyStudyAssignmentSubmissionPayload,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.put(
    `/my-works/assignment/session/847e1216-3bc4-4fef-8b6e-78d045c16ad9/batch/f86fb3b9-e852-4bde-97a6-719489911f88/update-submission`,
    serialize(payload.req),
  );
  return data;
};
