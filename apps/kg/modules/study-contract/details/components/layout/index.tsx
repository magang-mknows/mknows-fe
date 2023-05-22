import { FC, ReactElement } from "react";
import { MainLayoutTypes } from "./type";

export const MainLayouts: FC<MainLayoutTypes> = ({
  children,
  className,
  dataType,
  withHScreen = true,
  withPadding = true,
}): ReactElement => {
  return (
    <section
      className={`${withHScreen && "min-h-screen"} ${className} ${
        withPadding && "px-[70px]"
      } w-full`}
      data-type={dataType}
    >
      {children}
    </section>
  );
};
