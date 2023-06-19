import { TMetaResponse, TMetaResponseSingle } from "@mknows-frontend-services/utils";

type TItemCertificate = {
  id: string;
  student_id: string;
  subject_id: any;
  event_id: string;
  type: string;
  id_certificate: string;
  file: string;
  link: string;
  thumbnail: string;
  thumbnail_link: string;
  subject_certificate: string;
  event_certificate: EventCertificate;
};

type EventCertificate = {
  name: string;
};

export type TCertificateResponse = TMetaResponse<TItemCertificate>;
