import { TLeaderboard } from "@/services/Leaderboard/types";
import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactNode } from "react";

export interface PopupProfilProps {
  lookup?: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  stylePopup?: string;
  student_id?: string;
  student_name?: string;
  subjectCount?: string;
  averageScore?: string;
  author?: AuthorLead;
}

export interface AuthorLead {
  avatar?: string;
  discussion_likes?: number;
  discussion_posted?: number;
  full_name?: string;
  ipk?: string;
  major?: string;
  poin?: string;
  role?: string;
  total_certificates: number;
}

export interface StepLadderProps {
  avatar?: StaticImport;
  medal?: StaticImageData;
  name?: string;
  score?: number;
  styleCard?: string;
  positionImage?: string;
  styleAvatar?: string;
  styleMedal?: string;
  outlineImage?: string;
  styleName?: string;
  styleScore?: string;
}
