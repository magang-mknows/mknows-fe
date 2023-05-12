'use client';

import { SessionProvider } from 'next-auth/react';
import type { FC, ReactElement } from 'react';
import type { TChildrenProps } from './types';

export const NextAuthProvider: FC<TChildrenProps> = ({
  children,
}): ReactElement => {
  return <SessionProvider>{children}</SessionProvider>;
};
