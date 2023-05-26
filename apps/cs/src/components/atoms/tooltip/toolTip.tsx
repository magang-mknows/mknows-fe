<<<<<<< HEAD:apps/cs/src/components/atoms/tooltip/toolTip.tsx
import { FC, ReactElement } from 'react';
import { TtoolTip } from './type';
=======
import { FC, ReactElement } from "react";
import { TtoolTip } from "./types";
>>>>>>> 1c6d27fc30e454d22023442e30c16a4c69b1fb92:apps/cs/src/modules/user/toolTip.tsx

const ToolTip: FC<TtoolTip> = ({ children, tooltip, className }): ReactElement => {
  return (
    <div className="group relative inline-block">
      {children}
      <span
        className={`${className} absolute top-full mt-2 p-1 text-xs whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition border-[1px] rounded-[4px]`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default ToolTip;
