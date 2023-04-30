import { FC, ReactElement } from 'react';
import { TRandomShit } from './types';

export const RandomShitBg: FC<TRandomShit> = ({ className }): ReactElement => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1440"
      height="560"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1060")' fill="none">
        <path
          d="M 0,304 C 96,286.6 288,197.2 480,217 C 672,236.8 768,427 960,403 C 1152,379 1344,158.2 1440,97L1440 560L0 560z"
          fill="rgba(241, 241, 241, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1060">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};
