import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TFaculty = {
  id: string;
  name: string;
  majors_count: number;
  thumbnail: string;
  slug: string;
  faculty_id: string;
};

export type TFacultyResponse = TMetaResponseSingle<TFaculty>;
