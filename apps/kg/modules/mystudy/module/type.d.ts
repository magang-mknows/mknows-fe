import { TMetaResponse } from "@mknows-frontend-services/utils";

export type ConfirmModulTypes = {
  setConfirmModul: (val: boolean) => void;
  getConfirmModul: boolean;
};

export type TModuleItem = {
  id: string;
  total_videos: string;
  total_documents: string;
  is_all_video_seen: boolean;
  title: string;
  description: string;
  submitted?: boolean;
};

export type TModuleResponse = TMetaResponse<TModuleItem>;
