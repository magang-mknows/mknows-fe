import { ReactNode } from "react";

export type TSidebarProp = {
  children: ReactNode;
  items: Array<{
    icon: ReactNode;
    title: string;
    link: string;
  }>;
};
