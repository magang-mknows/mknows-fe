import { TMetaResponse } from '@mknows-frontend-services/utils';

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

export type TEventResponse = TMetaResponse<TEventItem>;
