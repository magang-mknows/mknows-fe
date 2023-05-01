import { FC, ReactElement } from 'react';
import { TLayoutProps } from './types';
import Sidebar from '../component/sidebar';

export const BaseLayout: FC<TLayoutProps> = ({ children }): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row h-auto w-screen">
        <div>
          <Sidebar />
        </div>
        <div className="w-screen overflow-hidden p-8 max-screen-auto bg-[#F6FBFA]">
          {children}
        </div>
      </div>
    </div>
  );
};
