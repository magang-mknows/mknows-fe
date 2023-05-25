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
  images: Array<string>;
};

export type TDiscussionSingleResponse = TMetaResponseSingle<TDiscussionItem>;
export type TDiscussionResponse = TMetaResponse<TDiscussionItem>;
