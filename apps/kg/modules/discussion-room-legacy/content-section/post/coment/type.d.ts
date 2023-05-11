import { ReactNode } from "react";

export type TCommentCardProps = {
  children: ReactNode;
  hasImage: boolean;
  imgSource?: StaticImport;
  text?: string;
  title?: string;
  userName: string;
  time: string;
  countLikes: number;
  type: "post" | "comment";
};
