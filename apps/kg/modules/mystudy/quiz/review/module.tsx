import { FC, ReactElement, useEffect, useMemo } from "react";
import {
  useCurrentQuizReviewNumber,
  useGetQuizReviewByAttemptId,
  useQuizReviewQuestionsAnswers,
} from "./hooks";
import { useRouter } from "next/router";

export const QuizReviewModule: FC = (): ReactElement => {
  const router = useRouter();
  const { getCurrNumber, setCurrNumber } = useCurrentQuizReviewNumber();
  const { getQuizReviewQuestionsAnswers, setQuizReviewQuestionsAnswers } =
    useQuizReviewQuestionsAnswers();
  const { data } = useGetQuizReviewByAttemptId({ attemptId: router.query.quizReviewId as string });
  const dataQuizReview = useMemo(() => data?.data, [data]);

  useEffect(() => {
    if (dataQuizReview) {
      setQuizReviewQuestionsAnswers(dataQuizReview);
    }
  }, [dataQuizReview]);

  function handleAnswerColor(index: number) {
    if (getQuizReviewQuestionsAnswers[getCurrNumber - 1].answers[index].is_correct) {
      return "bg-success-200 text-neutral-900";
    }
    if (getQuizReviewQuestionsAnswers[getCurrNumber - 1].answers[index].is_selected) {
      return "bg-warning-100 text-neutral-900";
    }
    return "bg-neutral-300 text-neutral-base";
  }

  function handleColorButtonGroup(index: number) {
    if (!getQuizReviewQuestionsAnswers[index].is_correct_item) {
      return `bg-warning-400 border-2 border-warning-400 text-neutral-200 hover:opacity-75 ${
        index + 1 === getCurrNumber
          ? "bg-white hover:bg-neutral-200 border-warning-400 text-neutral-900"
          : "border-none"
      }`;
    }
    return `bg-success-500 border-2 border-success-500 text-neutral-200 hover:opacity-75 ${
      index + 1 === getCurrNumber
        ? "bg-white hover:bg-neutral-200 border-success-500 text-neutral-900"
        : "border-none"
    }`;
  }

  return (
    <div className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-4 sm:px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <div className="flex flex-col py-[44px] mx-auto lg:mx-0 px-5 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-neutral-200 rounded-lg">
          {/* Question section */}
          <p className="text-black text-center w-full text-xl font-semibold ">
            {getCurrNumber}.{" "}
            {getQuizReviewQuestionsAnswers &&
              getQuizReviewQuestionsAnswers.length > 0 &&
              getQuizReviewQuestionsAnswers[getCurrNumber - 1].question}
          </p>
          {/* Answer section */}
          <div className="flex flex-col items-center gap-y-7 w-full min-h-[120px]">
            {getQuizReviewQuestionsAnswers &&
              getQuizReviewQuestionsAnswers.length > 0 &&
              getQuizReviewQuestionsAnswers[getCurrNumber - 1]?.answers.map((answers, index) => (
                <button
                  key={index}
                  className={`relative w-full sm:w-[70%] py-4 text-base rounded-lg flex place-content-center cursor-default ${handleAnswerColor(
                    index,
                  )}`}
                >
                  <p className="min-w-[120px] text-left">
                    {String.fromCharCode(97 + index)}. {answers.answer}
                  </p>
                </button>
              ))}
          </div>
        </div>
        {/* Timer Section */}
        <div className="flex flex-col h-[232px] gap-5 lg:w-[35%] w-full mx-auto">
          <div className="px-[22px] py-4 border border-solid border-neutral-200 rounded-lg">
            <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
            {getQuizReviewQuestionsAnswers && getQuizReviewQuestionsAnswers.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {[...Array(getQuizReviewQuestionsAnswers.length)].map((_, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-transparent p-1"
                    onClick={() => {
                      setCurrNumber(index + 1);
                    }}
                  >
                    <button
                      className={`${handleColorButtonGroup(
                        index,
                      )} w-full h-full transition-colors ease-in-out duration-300 rounded-lg m-auto text-base font-bold `}
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
