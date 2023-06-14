import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TDiscussion = {
  rowAffected: number;
};

export type TDiscussionDetailResponse = TMetaResponseSingle<TDiscussion>;
