import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TusePopupConfirmModul = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

type TModuleModuleVideo = {
  id: string;
  module_id: string;
  url: string;
  title: string;
  description: string;
};

type TModuleModuleDocument = {
  id: string;
  document_file: string;
  module_id: string;
  title: string;
};

export type TModuleContentItem = {
  id: string;
  session_id: string;
  document_id: string[];
  video_id: string;
  duration_sec: number;
  title: string;
  description: string;
  module_moduleVideos: TModuleModuleVideo[];
  module_moduleDocuments: TModuleModuleDocument[];
};

type TWatchedVideoProgressItem = {
  id: string;
  student_id: string;
  video_id: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
};

export type TModuleContentResponse = TMetaResponseSingle<TModuleContentItem>;
export type TWatchedVideoProgressReponse = TMetaResponseSingle<TWatchedVideoProgressItem>;
