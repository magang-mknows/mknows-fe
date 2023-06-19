export interface IViewProfileProps {
  avatar?: string;
  full_name?: string;
  user_administration?: TUserAdministration;
  batch?: number;
  likeCount?: number;
  certificateCount?: number;
  totalFinalScore?: number;
  totalDiscussion?: number;
}

export type TUserAdministration = {
  department?: string;
  employee_id_number?: string;
  type?: string;
};
