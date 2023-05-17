import { TMetaResponse } from '@mknows-frontend-services/utils';
// certificate

type TCertificate = {
  id: string;
  student_id: string;
  subject_id: string;
  id_certificate: string;
  file: string;
  link: string;
  thumbnail: string;
  thumbnail_link: string;
  subject_certificate: SubjectCertificate;
  user_certificate: UserCertificate;
};

type SubjectCertificate = {
  name: string;
  subject_code: string;
  degree: string;
  level: number;
};

type UserCertificate = {
  email: string;
  full_name: string;
  user_name: string;
};

export type TCertificateResponse = TMetaResponse<TCertificate>;
