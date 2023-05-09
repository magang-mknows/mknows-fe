import { FC, ReactElement } from 'react';
import { ContentLayoutTypes } from './type';

export const ContentLayouts: FC<ContentLayoutTypes> = ({
  children,
  className = '',
  withFlex = true,
  withGrid = false,
  withGap = true,
}): ReactElement => {
  const flexContent = `${
    withFlex ? `flex flex-col ${withGap ? 'gap-y-[50px]' : ''}` : ''
  }`;

  const gridContent = `${withGrid ? `grid ${withGap ? 'gap-y-10' : ''}` : ''}`;

  return (
    <section className={`${flexContent} ${gridContent} ${className}`}>
      {children}
    </section>
  );
};
