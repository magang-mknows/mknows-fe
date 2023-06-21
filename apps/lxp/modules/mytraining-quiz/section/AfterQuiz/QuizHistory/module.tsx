import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingHistoryQuizBreadCumbs, myTrainingQuizBreadCumbs } from "../../../const";
import { ClientProvider } from "../../../../common/provider";
import { HistoryCard } from "./HistoryCard";
import { useRouter } from "next/router";

export const QuizHistory: FC = (): ReactElement => {
  const { query } = useRouter();
  return (
    <ClientProvider>
      <BreadCrumb
        items={myTrainingHistoryQuizBreadCumbs(query.quizID as string, query.batchID as string)}
        textColor="text-version2-400"
      />
      <HistoryCard />
    </ClientProvider>
  );
};
