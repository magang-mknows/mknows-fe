import { atom } from "recoil";
import { TDataCardDashboard } from "./types";

export const cardDashboardData = atom<TDataCardDashboard[]>({
  key: "data-card-dashboard",
  default: [
    {
      icon: "/assets/chart-quota/card1.svg",
      title: "Rotal Perusahaan",
      desc: "500",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/chart-quota/card2.svg",
      title: "Total Alokasi Kuota",
      desc: "270.000.000",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/chart-quota/card3.svg",
      title: "Total Lokasi Biaya",
      desc: "500.000.000",
      bgButton: "bg-secondary-500",
    },
  ],
});
