export interface MyTrainingModuleItem {
  id: string;
  total_videos: string;
  total_documents: string;
  description: string;
  is_all_video_seen: boolean;
  submitted: boolean;
  batch_id: string;
}
export type params = {
  subjectID: string;
  batchID: string;
};
export type TMyTrainingModuleResponse = ICommonMetaResponse<MyTrainingModuleItem>;
