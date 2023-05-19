import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TDiscussion = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  images: string[];
  is_global: boolean;
  created_at: string;
  discussion_comments: any[];
  likes: number;
  comments: number;
  author: Author;
  isLiked: boolean;
};

export interface Author {
  avatar: string;
  full_name: string;
  major: string;
  role: string;
}

export type TDiscussionPayload = {
  title: string;
  content?: string;
  images?: File;
};

export type TDiscussionDetailResponse = TMetaResponseSingle<TDiscussion>;
