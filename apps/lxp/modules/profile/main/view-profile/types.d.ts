export interface IViewProfileProps {
  avatar?: string;
  full_name?: string;
  user_administration?: TUserAdministration;
}

export type TUserAdministration = {
  department?: string;
  employee_id_number?: string;
  type?: string;
};
