import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TSubjectDetails = {
  conference: number;
  status: {
    [key: string]: "Done" | "In Progress";
  };
  progress: Array<"Done" | "In Progress">;
  isOpen: boolean;
};

// SERVICE API
export type TSubjectDetailsItem = {
  dataSubject: TDataSubject;
  dataSessions: TDataSession[];
};

export type TDataSubject = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

export interface TDataSession {
  id: string;
  session_no: number;
  is_locked: boolean;
  progress: TProgress[];
}

export interface TProgress {
  status: string;
  type: string;
  updated_at: string;
}

export type TSubjectDetailsResponse = TMetaResponseSingle<TSubjectDetailsItem>;
