import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: string;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  size?: "icon" | "modal" | "small" | "base" | "regular" | "large";
  color?: "noBorder" | "green" | "blue" | "yellow" | "gray" | "blueBorder" | "greenBorder";
  WFull?: boolean;
  hasImg?: boolean;
  text?: string;
  textStyle?: string;
  icon?: ReactNode | StaticImageData;
}
