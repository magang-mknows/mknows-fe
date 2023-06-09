import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement, lazy } from "react";
import { myTrainingQuizBreadCumbs } from "./const";
import { ClientProvider } from "../common/provider";

const QuizHome = lazy(() => import("./home/QuizHome"));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} textColor="text-version2-400" />
      <QuizHome />
    </ClientProvider>
  );
};

export default QuizHomePage;
