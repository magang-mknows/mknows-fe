import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../../const";
import { ClientProvider } from "../../../../common/provider";
import { HistoryCard } from "./HistoryCard";

export const QuizHistory: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} textColor="text-version2-400" />
      <HistoryCard />
    </ClientProvider>
  );
};
