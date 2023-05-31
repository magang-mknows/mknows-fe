import { TMetaResponseSingle, TMetaResponse } from "@mknows-frontend-services/utils";

export type TDiscussionPayload = {
  title: string;
  content: string;
  images: File;
};

export type TDiscussionItem = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  images: string[];
  is_global: boolean;
  created_at: string;
  user_discussions: UserDiscussions;
  author: Author;
  likes: number;
  isLiked: boolean;
  comments: number;
  time_elapsed: string;
};

export interface UserDiscussions {
  user_name: string;
}

export interface Author {
  avatar: string;
  full_name: string;
  major: string;
  role: string;
}

export type TDiscussionSingleResponse = TMetaResponseSingle<TDiscussionItem>;
export type TDiscussionResponse = TMetaResponse<TDiscussionItem>;
