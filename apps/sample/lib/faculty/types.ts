import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TFacultyPayload = {
  name: string;
  thumbnail: File;
};

export type TFacultyItem = {
  id: 'string';
  name: 'string';
  thumbnail: 'string';
  slug: 'string';
};

export type TFacultyResponse = TMetaResponseSingle<TFacultyItem>;
