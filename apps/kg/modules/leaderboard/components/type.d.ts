import { TLeaderboard } from "@/services/Leaderboard/types";
import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactNode } from "react";

export interface PopupProfilProps {
    id?: string,
    img?: string;
    averageScore: number;
    lookup?: boolean
    student_name: string;
    subjectCount: string;
    stylePopup?: string,
    widthModal?: string,
    onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>,
}

export interface StepLadderProps{
    avatar?: StaticImport,
    medal?: StaticImageData,
    name?: string,
    score?: number,
    styleCard?: string,
    positionImage?:string,
    styleAvatar?:string,
    styleMedal?: string,
    outlineImage?: string,
    styleName?: string,
    styleScore?: string,
}