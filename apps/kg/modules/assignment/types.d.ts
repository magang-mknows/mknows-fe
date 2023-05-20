import { TMetaResponse } from '@mknows-frontend-services/utils';

type TAssignmentUser = {
  assignment_id: string;
  assignment_session_id: string;
  assignment_title: string;
  assignment_desc: string;
  progress_status: string;
  progress_type: string;
  progress_timestamp_taken: string;
  progress_deadline: string;
};

export type TMyAssignmentResponse = TMetaResponse<TAssignmentUser>;
