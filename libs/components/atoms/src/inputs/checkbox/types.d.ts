export interface ICheckbox {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  success?: string | boolean;
  warning?: string;
  variant: 'lg' | 'md' | 'sm';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
