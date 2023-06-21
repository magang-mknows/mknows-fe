import { atom } from "recoil";
import { TDashboardItem } from "./types";

export const dashboardDataState = atom<TDashboardItem | null>({
  key: "dashboard-data-state",
  default: null,
});
