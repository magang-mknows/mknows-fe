import React, { Fragment } from "react";
import Question from "./Question";
import Count from "./Count";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingQuizBreadCumbs } from "../../constant";
import { ClientProvider } from "../../../common/provider";
import { useGetMyWorkTakeQuiz } from "../../hooks";
import { useRouter } from "next/router";

export const QuizStartPage = () => {
  const { query } = useRouter();
  const { data } = useGetMyWorkTakeQuiz(query.subjectID as string, query.batchID as string);
  console.log(data);
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <div className="mx-8 md:mx-14 lg:mx-16 bg-[#FFFF] mt-5 rounded-md">
        <div className="flex px-[32px] py-[52px] lg:gap-[52px]">
          <Question />
          <Count />
        </div>
      </div>
    </ClientProvider>
  );
};
