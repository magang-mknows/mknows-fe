import { FC, Fragment, ReactElement, Suspense } from 'react';
import { TNavbarProps } from './types';
import { lazily } from 'react-lazily';
import { LBottomNav, LTopNav } from './section';

const { BottomNav, TopNav } = lazily(() => import('./section'));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback={<LTopNav />}>
        <TopNav {...props} />
      </Suspense>
      {props.showBottomNav && (
        <Suspense fallback={<LBottomNav />}>
          <BottomNav />
        </Suspense>
      )}
    </Fragment>
  );
};
