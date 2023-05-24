import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TDiscussion = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: boolean;
  images: string[];
  updated_at: string;
  created_at: string;
  deleted_at: string;
};

export type TDiscussionPayload = {
  title: string;
  content?: string;
  images?: File;
};

export type TDiscussionDetailResponse = TMetaResponseSingle<TDiscussion>;
