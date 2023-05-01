import { FC, ReactElement } from 'react';
import { ArticleSection } from './article';
import { LeaderboardSection } from './leaderboard';
import { ResumeSection } from './resume';

export const SidebarSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
      <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
        <ResumeSection />
        <LeaderboardSection />
      </div>
      <ArticleSection />
    </div>
  );
};
