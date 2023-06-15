import { serialize } from "object-to-formdata";
import api from "../../services/api";
import { TAssigmentParams, TMyStudyAssignmentResponse, TMyStudyAssignmentSubmissionPayload } from "./type";

export const assignmentGetRequest = async (
  params : TAssigmentParams,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.get(`/my-works/assignment/session/${params.subjectID}/batch/${params.batchID}/data`);
  return data;
};

export const assignmentSubmissionRequest = async (
  payload: TMyStudyAssignmentSubmissionPayload,
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.put(
    `/my-works/assignment/session/${payload.subjectID}/batch/${payload.batchID}/update-submission`,
    serialize(payload.req),
  );
  return data;
};
