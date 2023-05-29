import { TMetaResponseSingle, TMetaResponse } from "@mknows-frontend-services/utils";

export type TDiscussionPayload = {
  title?: string;
  content?: string;
  images?: File;
};

export type TDiscussionItem = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: boolean;
  images: string[];
  discussion_comments: DiscussionComment[];
};

export interface DiscussionComment {
  id: string;
  user_id: string;
  discussion_forum_id: string;
  content: string;
  image: string;
  comment_replies: string[];
  updated_at: string;
  created_at: string;
  deleted_at: string;
}

export type TDiscussionResponse = TMetaResponse<TDiscussionItem>;
export type TDiscussionSingleResponse = TMetaResponseSingle<TDiscussionItem>;
export type TCommentResponse = TMetaResponseSingle<TDiscussionItem>;
