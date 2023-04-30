import { FC, ReactElement } from 'react';
import { TRandomShit } from './types';

export const RandomShit1: FC<TRandomShit> = ({ className }): ReactElement => {
  return (
    <svg
      className={className}
      width="100"
      height="31"
      viewBox="0 0 100 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2L20 11L41 2L60.5 11L80.5 2L99.5 11"
        stroke="#106FA4"
        strokeWidth="2"
      />
      <path
        d="M1 11L20 20L41 11L60.5 20L80.5 11L99.5 20"
        stroke="#106FA4"
        strokeWidth="2"
      />
      <path
        d="M1 20L20 29L41 20L60.5 29L80.5 20L99.5 29"
        stroke="#106FA4"
        strokeWidth="2"
      />
    </svg>
  );
};
