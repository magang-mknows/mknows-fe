import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import Sidebar from './sidebar';

const MyTrainingDiscussionModule: FC = (): ReactElement => {
  return (
    <ClientProvider className="!bg-[#FAFAFA]">
      <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-5   dark:bg-[#222529]">
        <div className="md:basis-3/12 ">
          <Sidebar />
        </div>
      </div>
    </ClientProvider>
  );
};

export default MyTrainingDiscussionModule;
