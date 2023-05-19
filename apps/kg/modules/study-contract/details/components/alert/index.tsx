import { FC, ReactElement, useState } from "react";
import type { AlertProps } from "./type";

const Alert: FC<AlertProps> = ({ detail }): ReactElement => {
  const [isClose, setClose] = useState(false);
  return (
    <div
      className={`${
        isClose && "hidden"
      } flex bg-[#E9F6FD] border border-[#106FA4] text-[#106FA4] px-4 py-3 rounded relative`}
      role="alert"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
          fill="#106FA4"
        />
      </svg>

      <span className="block sm:inline px-4">{detail}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          onClick={() => setClose(true)}
          className="fill-current h-6 w-6 text-gray-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};
export default Alert;
