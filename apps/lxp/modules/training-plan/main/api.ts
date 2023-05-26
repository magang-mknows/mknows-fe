import api from "../../../services/api";
import { TDepartmentResponse } from "./types";

export const getAllDepartments = async (keyword: string): Promise<TDepartmentResponse> => {
  const params = new URLSearchParams([["search", keyword]]);
  const { data } = await api.get(
    keyword === "" ? "/departments/active" : `/departments/active/filter`,
    { params },
  );
  if (data.ok) {
    // throw new Error('Network response was not ok');
    console.log("kimey");
  }

  return data;
};
