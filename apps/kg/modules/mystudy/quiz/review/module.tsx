import { FC, ReactElement } from "react";
import { TQuizReviewItem } from "./types";
import { useCurrentQuizReviewNumber, useGetQuizReviewByAttemptId } from "./hooks";
import { useRouter } from "next/router";

export const QuizReviewModule: FC = (): ReactElement => {
  const router = useRouter();
  const { getCurrNumber, setCurrNumber } = useCurrentQuizReviewNumber();
  const { data } = useGetQuizReviewByAttemptId({ attemptId: router.query.quizReviewId as string });
  const dataQuizReview: Array<TQuizReviewItem> = data?.data as Array<TQuizReviewItem>;

  function handleAnswerColor(index: number) {
    if (dataQuizReview[getCurrNumber - 1].answers[index].is_correct) {
      return "bg-[#C2F7B6] text-neutral-900";
    }
    if (dataQuizReview[getCurrNumber - 1].answers[index].is_selected) {
      return "bg-[#F9B7B4] text-neutral-900";
    }
    return "bg-[#D4D4D4] text-[#A3A3A3]";
  }

  function handleColorButtonGroup(index: number) {
    if (
      dataQuizReview[index].answers[index].is_correct ===
      dataQuizReview[index].answers[index].is_selected
    ) {
      return `bg-[#3EB449] border-2 border-[#3EB449] text-neutral-200 hover:opacity-75 ${
        index + 1 === getCurrNumber
          ? "bg-white hover:bg-neutral-200 border-[#3EB449] text-neutral-900"
          : "border-none"
      }`;
    }
    return `bg-[#F14F48] border-2 border-[#F14F48] text-neutral-200 hover:opacity-75 ${
      index + 1 === getCurrNumber
        ? "bg-white hover:bg-neutral-200 border-[#F14F48] text-neutral-900"
        : "border-none"
    }`;
  }

  return (
    <div className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-4 sm:px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <div className="flex flex-col py-[44px] mx-auto lg:mx-0 px-5 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg">
          {/* Question section */}
          <p className="text-black text-center w-full text-xl font-semibold ">
            {getCurrNumber}.{" "}
            {dataQuizReview &&
              dataQuizReview.length > 0 &&
              dataQuizReview[getCurrNumber - 1].question}
          </p>
          {/* Answer section */}
          <div className="flex flex-col items-center gap-y-7 w-full min-h-[120px]">
            {dataQuizReview &&
              dataQuizReview.length > 0 &&
              dataQuizReview[getCurrNumber - 1]?.answers.map((answers, index) => (
                <button
                  key={index}
                  className={`relative w-full sm:w-[70%] py-4 text-base rounded-lg flex place-content-center ${handleAnswerColor(
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
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
            {dataQuizReview && dataQuizReview.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {[...Array(dataQuizReview.length)].map((_, index) => (
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
