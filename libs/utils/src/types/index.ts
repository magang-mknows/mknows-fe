import { AxiosError } from 'axios';

export type TMetaItem = {
  code: 200;
  status: 'OK';
  message: 'Success login';
};

export type TMetaResponse<T> = {
  data: Array<T>;
} & TMetaItem;

export type TMetaResponseSingle<T> = {
  data: T;
} & TMetaItem;

export type TMetaErrorResponse = AxiosError<TMetaItem>;
