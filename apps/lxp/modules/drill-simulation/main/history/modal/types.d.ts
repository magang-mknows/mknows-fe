export type TDrillSimulationPopup = {
  type: "sent" | "pending" | "finished";
  title: string;
  children: ReactNode;
};
