import { Question } from "./Question";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../constant";
import { ClientProvider } from "../../../common/provider";

export const QuizStartPage = () => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} textColor="text-version2-400" />
      <div className="mx-8 md:mx-14 lg:mx-16 bg-neutral-50 mt-4 rounded-md shadow-sm">
        <Question />
      </div>
    </ClientProvider>
  );
};
