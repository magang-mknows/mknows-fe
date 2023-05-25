import { TMetaResponse } from "@mknows-frontend-services/utils";

export type TMajor = {
  id: string;
  faculty_id: string;
  name: string;
  major_head_id: string;
  description: string;
  thumbnail: string;
  slug: string;
  subject_count: number;
  total_credit: number;
};

export type TMajorResponse = TMetaResponse<TMajor>;
