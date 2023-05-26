import api from "../../../services/api";
import { TAskKRSResponse, TMyWorkPlanResponse, TSubjectResponse } from "./types";

export const getSubjectByDeptId = async (deptId: string): Promise<TSubjectResponse> => {
  const { data } = await api.get(`/subjects/department/${deptId}`);
  return data;
};

export const askKRS = async (deptId: string): Promise<TAskKRSResponse> => {
  const { data } = await api.post(`/work-plans/send-draft/department/${deptId}`);
  return data;
};

export const getMyWorkPlan = async (): Promise<TMyWorkPlanResponse> => {
  const { data } = await api.get("/work-plans/sub/me");
  return data;
};
