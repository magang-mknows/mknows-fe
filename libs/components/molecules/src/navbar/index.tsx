import { FC, ReactElement, Suspense } from 'react';
import { TNavbarProps } from './types';
import { lazily } from 'react-lazily';
import { LBottomNav, LTopNav } from './section';
import { useSession } from 'next-auth/react';

const { BottomNav, TopNav } = lazily(() => import('./section'));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  const { data: session } = useSession();
  return (
    <header className="flex flex-col w-full sticky top-0 z-20">
      <Suspense fallback={<LTopNav />}>
        <TopNav {...props} />
      </Suspense>
      {session && (
        <Suspense fallback={<LBottomNav />}>
          <BottomNav {...props} />
        </Suspense>
      )}
    </header>
  );
};
