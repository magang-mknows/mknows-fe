import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TusePopupConfirmModul = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type TModuleContentItem = {
  id: string;
  session_id: string;
  document_id: string[];
  video_id: any;
  duration_sec: number;
  title: string;
  description: string;
  module_moduleVideos: any[];
  module_moduleDocuments: any[];
};

export type TModuleContentResponse = TMetaResponseSingle<TModuleContentItem>;
