export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | number;
  size?: "icon" | "modal" | "small" | "base" | "regular" | "large";
  color?: "noBorder" | "green" | "blue" | "yellow" | "gray" | "blueBorder" | "greenBorder";
  to?: string;
  icon?: ReactNode | StaticImageData;
  target?: string;
  WFull?: boolean;
  hasImg?: boolean;
  hasExternal?: boolean;
  loading?: boolean;
  textStyle?: string;
}

export type DashedTextProps = {
  text?: string;
};

export interface UploadFieldProps {
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
  ref?: Ref<HTMLInputElement>;
  files?: string;
  value?: string;
  accepted?: string;
  control?: Control<any, T>;
  onDrop?: (acceptedFiles: any) => void;
  path?: File;
  type?: string;
}

export type PopupModalProps = {
  id?: string;
  popupTitle?: string;
  description?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  icon?: StaticImageData;
  image?: StaticImageData;
  lookup?: boolean;
  children?: ReactNode;
  className?: string;
  hasImg?: boolean;
  stylePopup?: string;
  widthModal?: string;
  hasButton?: boolean;
};
