/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";
import { Control } from "react-hook-form";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
  RefObject,
  ButtonHTMLAttributes,
  MouseEventHandler,
  Ref,
} from "react";

export interface TextFieldProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject;
  success?: string;
  warning?: string;
  hasLabel?: boolean;
  control?: Control<any, T>;
}

export type ModalProps = {
  title?: string;
  children: ReactNode;
  button?: ReactNode;
  hasButton?: boolean;
  hasImage?: boolean;
  lookup: boolean;
  withClose?: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement | SVGElement>;
};

export interface MobileMenuProps {
  list: {
    name: string;
    link: string;
  }[];
}

export interface SelectFieldProps {
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
  control?: Control<any, T>;
}

export interface OptionFieldProps {
  value: string;
  label: string;
  className?: string;
}

export type DropdownProps = {
  children: ReactNode;
  list: Array<{
    icon: ReactNode;
    text: string;
  }>;
};

export type NavbarProps = {
  list: {
    name?: string;
    link: string;
    time?: string;
  }[];
};

export interface RadioButtonsProps {
  id?: string;
  value: string;
  name?: string;
  classNameInput?: string;
  htmlFor: string;
  classNameLabel?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export interface CheckboxFieldProps {
  className?: string;
  labelClassName?: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  control?: Control<any, T>;
}

export interface CardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage: boolean;
  href?: string;
  imgStyle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

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
