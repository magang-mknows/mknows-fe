export type leaderBoardRankProps = {
  id?: string;
  img: string;
  score: number;
  name: string;
  index?: string | number;
};
export interface PopupProfilProps {
  id?: string;
  img: string;
  score: number;
  lookup?: boolean;
  name: string;
  index?: string | number;
  stylePopup?: string;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
}

export const leaderBoardBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Papan Skor",
    link: "/papan-skor",
  },
];
