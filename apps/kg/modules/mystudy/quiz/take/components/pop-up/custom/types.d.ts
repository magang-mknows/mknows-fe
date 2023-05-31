export type TCustomPopupProps = {
  children: ReactNode;
  lookup: boolean;
  withClose?: boolean;
  modalStyle?: string;
  childrenStyle?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement | SVGElement>;
  closeStyle?: string;
};
