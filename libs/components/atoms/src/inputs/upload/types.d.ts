/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TUploadFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  className?: string;
  error?: string;
  success?: string;
  warning?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  hasLabel?: boolean;
  files?: string;
  value?: string;
  accepted?: string;
  onDrop?: (acceptedFiles: any) => void;
  path?: File;
  type?: string;
};
