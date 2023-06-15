import { ClientProvider } from "../common/provider";
import { ResumeSection } from "./resume";
import { LeaderBoardSection } from "./leaderboard";
import { ArticleSection } from "./article";
import { TaskSection } from "./task";
import { EventSection } from "./event";
import { ProgressSection } from "./progress";
import { CalendarSection } from "./calendar";
import { ContentFooter } from "../common/footer/footer-content";
import { useDashboard } from "./hook";

export const DashboardModule = () => {
  const { data } = useDashboard();

  console.log("dashboard : ", data);

  return (
    <ClientProvider>
      <section className="bg-light pt-10  min-h-[120vh] pb-20">
        <div className="grid grid-cols-3 gap-x-10 px-8 md:px-14 lg:px-16">
          <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
            <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
              <ResumeSection {...data?.data?.dataUser} />
              <LeaderBoardSection />
            </div>
            <ArticleSection />
          </div>
          <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <TaskSection items={data?.data?.dataAssignments} />
              <EventSection />
            </div>
            <ProgressSection items={data?.data?.dataMyWork} />
            <CalendarSection />
          </div>
        </div>
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
