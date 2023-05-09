import { TMetaResponse } from '@mknows-frontend-services/utils';

export type TFaculty = {
  id: string;
  name: string;
  majors_count: number;
  thumbnail: string;
  slug: string;
};

export type TFacultyResponse = TMetaResponse<TFaculty>;
