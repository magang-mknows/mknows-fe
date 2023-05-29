import { FC, Fragment, ReactElement } from "react";
import HistoryCard from "./HistoryCard";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../../constant";
import { ClientProvider } from "../../../../common/provider";

export const QuizHistory: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <div className="px-6 md:px-8 lg:px-10 w-full min-h-screen my-20">
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </section>
      </div>
    </ClientProvider>
  );
};
