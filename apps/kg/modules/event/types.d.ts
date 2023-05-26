import { TMetaResponse } from "@mknows-frontend-services/utils";
import { StaticImageData } from "next/image";

export interface CardListProps {
  slug?: string;
  title?: string;
  image?: StaticImageData;
  price?: Gratis | number;
  status?: Terdaftar | Selesai;
  day?: string;
  date?: Date | string;
}

export interface SideBarProps {
  active?: "EventList" | "RegisteredEvent" | "EventHistory";
}

export type TEventPayload = {
  id: string;
  name: string;
  registration_close_date: string;
  date_start: string;
  date_end: string;
  description: string;
  capacity: number;
  thumbnail: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
};

export type TEventItem = {
  id: string;
  name: string;
  registration_close_date: string;
  date_start: string;
  date_end: string;
  description: string;
  capacity: number;
  thumbnail: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
};

export type TEventParams = {
  id: string | number;
};

export type TEventResponse = TMetaResponse<TEventItem>;
