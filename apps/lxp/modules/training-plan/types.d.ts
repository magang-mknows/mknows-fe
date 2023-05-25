import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TCheckWorkPlanStatusItem = {
  status: boolean;
  gasken_ke: string;
};

export type TCheckWorkPlanStatusResponse =
  TMetaResponseSingle<TCheckWorkPlanStatusItem>;
