import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { DashboardBreadCumbs } from './const';
import { ClientProvider } from '../common/provider';
import { ResumeSection } from './resume';
import { LeaderBoardSection } from './leaderboard';
import { ArticleSection } from './article';
import { TaskSection } from './task';
import { EventSection } from './event';
import { ProgressSection } from './progress';
import { CalendarSection } from './calendar';
import { ContentFooter } from '../common/footer/footer-content';

export const DashboardModule = () => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60 min-h-[120vh] pb-20">
        <BreadCrumb items={DashboardBreadCumbs} textColor="text-version2-400" />
        <div className="grid grid-cols-3 gap-x-10 px-8 md:px-14 lg:px-16">
          <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
            <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
              <ResumeSection />
              <LeaderBoardSection />
            </div>
            <ArticleSection />
          </div>
          <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <TaskSection />
              <EventSection />
            </div>
            <ProgressSection />
            <CalendarSection />
          </div>
        </div>
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
