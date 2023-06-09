export type videoMytrainingTypes = {
  url?: string;
  title?: string;
  description?: string;
};

export type docMytrainingTypes = {
  url?: string;
  title?: string;
  description?: string;
};

export type  TVideoModuleParams = {
  subjectID: string;
  moduleID: string;
  videoID: string;
};

export type TVideoModule = {
  videoID: string;
};

export type TVideoModuleResponse = ICommonMetaResponse<TVideoModule>


