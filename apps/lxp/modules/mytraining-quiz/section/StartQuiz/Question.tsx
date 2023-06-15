import { Button } from "@mknows-frontend-services/components/atoms";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRecoilState } from "recoil";
import { currentQuestionState } from "./store";
import { useCallback, useEffect, useState } from "react";
import { ISubmitQuizVariable, TAnswer, TGetQuizParams, TStoreQuestionAnswer } from "./types";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  storeToLocalStorage,
} from "@mknows-frontend-services/utils";
import { useRouter } from "next/router";
import { useGetQuizQuestion, useSubmitQuizAnswer } from "./hook";

export const Question = () => {
  // ================================
  // questions data from api
  // =================================

  const { query } = useRouter();
  const params: TGetQuizParams = {
    quizId: query.quizID as string,
    batchId: query.batchID as string,
  };

  const { data: QuizQuestion } = useGetQuizQuestion(params);
  const quizQuestionData = QuizQuestion?.data;
  const questions = quizQuestionData?.questions_answers;

  // =========================
  // set up necessary state
  // =========================
  const [getCurrentNumber, setCurrentNumber] = useRecoilState(currentQuestionState);
  const [isDoubt, setDoubt] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [questionsAnswer, setQuestionsAnswer] = useState<TStoreQuestionAnswer[]>([]);

  // =================================
  // store to local storage
  // on answer and curent number change
  // =================================
  const storeAnswertoLocalStorage = useCallback(() => {
    storeToLocalStorage("questions_answers", questionsAnswer);
  }, [questionsAnswer]);

  const storeCurrentNumber = useCallback(() => {
    storeToLocalStorage("current_number", getCurrentNumber);
  }, [getCurrentNumber]);

  // =======================
  // handle answer change
  // and doubt answer
  // =======================
  const handleAnswerChange = (questionId: string, answerId: string) => {
    const asnweredQueston = questionsAnswer.filter((obj) => obj.question === questionId);
    if (asnweredQueston.length > 0) {
      asnweredQueston[0].answer = answerId;
    } else {
      setQuestionsAnswer((prev) => [...prev, { answer: answerId, question: questionId }]);
    }
    storeAnswertoLocalStorage();
  };

  const handleDoubtAnswer = (questionId: string, doubt: boolean) => {
    const answeredQueston = questionsAnswer.filter((obj) => obj.question === questionId);
    if (answeredQueston.length > 0) {
      answeredQueston[0].doubt = doubt;
    } else {
      setQuestionsAnswer((prev) => [...prev, { doubt: doubt, question: questionId }]);
    }
    storeAnswertoLocalStorage();
  };

  useEffect(() => {
    questionsAnswer[getCurrentNumber - 1]?.doubt !== undefined
      ? setDoubt(questionsAnswer[getCurrentNumber - 1]?.doubt as boolean)
      : setDoubt(false);
  }, [getCurrentNumber, questionsAnswer]);

  // ============================
  // read and store local storage
  // after first load
  // ============================
  useEffect(() => {
    const questionAnswer = getFromLocalStorage("questions_answers");
    const currentNumber = getFromLocalStorage("current_number");
    if (questionAnswer !== null && questionAnswer !== undefined) {
      setQuestionsAnswer(questionAnswer);
    }

    if (currentNumber !== null && currentNumber !== undefined) {
      setCurrentNumber(currentNumber);
    }
  }, [setQuestionsAnswer, setCurrentNumber]);

  useEffect(() => {
    storeAnswertoLocalStorage();
    storeCurrentNumber();
  }, [storeAnswertoLocalStorage, storeCurrentNumber]);

  const { mutate } = useSubmitQuizAnswer();

  const handleSubmitAnswer = ({ quizAnswer, quizParams }: ISubmitQuizVariable) => {
    mutate(
      { quizAnswer, quizParams },
      {
        onSuccess: () => {
          removeFromLocalStorage("questions_answers");
          removeFromLocalStorage("current_number");
          console.log("berhasil kirim jabawan");
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <div className="grid grid-cols-3 p-8  lg:gap-[52px]">
      <div className=" col-span-2 border-2 rounded-md w-full border-neutral-100  py-10 px-8">
        {questions?.map((question, index) => {
          return (
            <div key={index} className={`${index + 1 === getCurrentNumber ? "block" : "hidden"}`}>
              <div className="flex mb-6">
                <h1 className="text-neutral-800 text-center font-bold text-base">
                  {index + 1}. {question.question}
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                {question.answers.map((answer: TAnswer, index: number) => (
                  <label
                    key={answer.id}
                    className={`w-full h-10 text-sm px-2 rounded-md shadow-sm flex items-center border-[1px] border-version3-300 ${
                      questionsAnswer.some(
                        (obj) => answer.id === obj.answer || selectedOption === answer.id,
                      )
                        ? "bg-version3-300 text-neutral-100"
                        : " bg-neutral-50 text-neutral-800"
                    }`}
                  >
                    <input
                      className="appearance-none"
                      type="radio"
                      name={question.id}
                      value={answer.id}
                      onChange={(e) => {
                        handleAnswerChange(question.id, answer.id);
                        setSelectedOption(e.target.value);
                      }}
                    />
                    {String.fromCharCode(96 + (index + 1)).toUpperCase()}. {answer?.answer}
                  </label>
                ))}
              </div>
              <div className="flex flex-col lg:flex-row gap-4 mt-12">
                <Button
                  disabled={getCurrentNumber === 1}
                  type="button"
                  onClick={() => {
                    setCurrentNumber(getCurrentNumber - 1);
                  }}
                  className="flex gap-2 w-full hover:bg-neutral-100/50 items-center px-4 py-3 justify-center bg-neutral-50 border-2 border-version3-500 rounded-md shadow-sm disabled:bg-neutral-200 disabled:border-neutral-200 group "
                >
                  <MdOutlineNavigateNext className="rotate-180 group-disabled:text-neutral-600 text-version3-500" />
                  <h1 className="text-version3-500 text-sm font-bold group-disabled:text-neutral-500">
                    Sebelumnya
                  </h1>
                </Button>
                <Button
                  onClick={() => {
                    setDoubt(!isDoubt);
                    handleDoubtAnswer(question.id, !isDoubt);
                  }}
                  type="reset"
                  className="flex gap-2 w-full  items-center px-4 py-3 justify-center bg-version3-500 border-2 border-version3-500 rounded-md shadow-sm hover:bg-version2-500"
                >
                  <AiOutlineQuestionCircle className=" text-neutral-50" />
                  <h1 className="text-neutral-50 text-sm font-bold">Ragu-ragu</h1>
                </Button>

                {getCurrentNumber !== questions.length ? (
                  <Button
                    onClick={() => {
                      setCurrentNumber(getCurrentNumber + 1);
                    }}
                    type="button"
                    className={`flex gap-2  w-full items-center px-4 py-3 justify-center bg-version3-500 border-2 border-version3-500 rounded-md shadow-sm hover:bg-version2-500`}
                  >
                    <h1 className="text-neutral-50 text-sm font-bold">Selanjutnya</h1>
                    <MdOutlineNavigateNext className=" text-neutral-50" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      const removedDoubt = {
                        questions_answers: questionsAnswer.map((answer) => {
                          const { doubt, ...rest } = answer;
                          return rest;
                        }),
                      };
                      handleSubmitAnswer({
                        quizAnswer: removedDoubt,
                        quizParams: params,
                      });
                    }}
                    type="button"
                    className={`flex gap-2 w-full  items-center px-4 py-3 justify-center bg-warning-500 border-2 border-warning-500 rounded-md shadow-sm hover:bg-warning-600`}
                  >
                    <h1 className="text-neutral-50 text-sm font-bold">Kumpulkan</h1>
                    <MdOutlineNavigateNext className=" text-neutral-50" />
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-2 rounded-md h-fit border-neutral-100 py-10 px-8">
        <h1 className="font-[700] text-base mb-6">Daftar Soal :</h1>
        <section className="flex flex-wrap gap-3">
          {questions?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCurrentNumber(index + 1);
                }}
                className={`${
                  index + 1 === (getCurrentNumber as number) ? "bg-neutral-200" : "bg-neutral-50 "
                } ${
                  questionsAnswer.some((obj) => obj.question === item.id)
                    ? questionsAnswer.some((obj) => obj.question === item.id && obj.doubt)
                      ? "bg-version3-500 text-white"
                      : questionsAnswer.some((obj) => obj.question === item.id && obj.answer)
                      ? "bg-version3-300 text-white"
                      : ""
                    : "bg-neutral-50"
                }  cursor-pointer h-10 w-10 rounded-md border-[1px] border-version2-400 grid place-items-center`}
              >
                {index + 1}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
