import { FC, ReactElement } from "react";
import HistoryCard from "./HistoryCard";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../../const";
import { ClientProvider } from "../../../../common/provider";

export const QuizHistory: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} textColor="text-version2-400" />
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-16 py-10 w-full">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </section>
    </ClientProvider>
  );
};
