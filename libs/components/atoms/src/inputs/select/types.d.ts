import { ChangeEventHandler } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';
export type TOptionFieldProps = {
  value: string;
  label: string;
  className?: string;
};

export type TSelectFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  className?: string;
  labelClassName?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  name: string;
  label: string | ReactNode;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  options: OptionFieldProps[];
  hasLabel?: boolean;
};
