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
  is_global: boolean;
  images: string[];
};

export interface DiscussionComment {
  id: string;
  user_id: string;
  content: string;
  image: string[];
  created_at: string;
  comment_replies: CommentReply[];
  likes: number;
  replies: number;
  author: Author2;
  isLiked: boolean;
}

export interface CommentReply {
  id: string;
  user_id: string;
  content: string;
  image: string[];
  created_at: string;
  likes: number;
  author: Author;
  isLiked: boolean;
}

export interface Author {
  avatar: string;
  full_name: string;
  major: string;
  role: string;
}

export type TDiscussionResponse = TMetaResponse<TDiscussionItem>;
export type TDiscussionSingleResponse = TMetaResponseSingle<TDiscussionItem>;
export type TCommentResponse = TMetaResponseSingle<TDiscussionItem>;
