import { FC, Fragment, ReactElement, useEffect, useMemo, useState } from "react";
import { QuizTimer } from "./components/quiz-timer";
import { useWindowSize } from "../../../common/hooks/use-window-size";
import {
  useAutoSaveQuizAnswer,
  useCurrentQuizNumber,
  useGetQuizTakeById,
  useQuizQuestion,
  useQuizRequestSubmit,
} from "./hooks";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import {
  TQuestionsAnswersPayloadItem,
  TQuizRequestSubmit,
  TQuizSubmitPayloadReq,
  TQuizTakeItem,
} from "./type";
import { QuizSubmitPopup } from "./components/pop-up/submit";
import { useQuizSubmitPopup } from "./components/pop-up/submit/hooks";
import { QuizQuitPopup } from "./components/pop-up/quit";
import { useQuizQuitPopup } from "./components/pop-up/quit/hooks";
import { TQuizSubmitPopup } from "./components/pop-up/submit/types";
import { QuizTakeBreadCrumb } from "./components/bread-crumb";
import { useAlreadyReturnQuiz } from "./return/hooks";
import { ReturnToQuizTake } from "./return/section";

export const QuizTakeModule: FC = (): ReactElement => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const { getQuestionsData, setQuestionsData } = useQuizQuestion();
  const { getCurrNumber, setCurrNumber } = useCurrentQuizNumber();
  const { getQuizRequestSubmit, setQuizRequestSubmit } = useQuizRequestSubmit();
  const { storedAnswer, setNewStoredAnswer } = useAutoSaveQuizAnswer();
  const { getQuizQuitPopup, setQuizQuitPopup } = useQuizQuitPopup();
  const { getQuizSubmitPopup, setQuizSubmitPopup } = useQuizSubmitPopup();
  const { getAlreadyReturnQuizProp, setAlreadyReturnQuizProp } = useAlreadyReturnQuiz();
  const { data } = useGetQuizTakeById(router.query.quizId as string);
  const dataQuizTake = useMemo(() => data?.data as TQuizTakeItem, [data]);
  const prevPath = router.asPath.split("/").slice(0, -2).join("/");

  useEffect(() => {
    setQuestionsData(dataQuizTake?.questions_answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuizTake]);

  useEffect(() => {
    const subjectDetailPath = prevPath.split("/")[2];
    if (subjectDetailPath !== "[detail-matkul]") {
      setQuizQuitPopup({
        ...getQuizQuitPopup,
        prevPath: prevPath,
        quizTakeId: router.query.quizId as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevPath]);

  const [storageAnswer, setStorageAnswer] = useState(() => {
    const storageValue = localStorage.getItem("quiz.answer");
    return storageValue ? JSON.parse(storageValue) : null;
  });

  useEffect(() => {
    if (!storageAnswer || (storageAnswer?.length === 0 && getQuestionsData?.length > 0)) {
      setStorageAnswer(JSON.parse(localStorage.getItem("quiz.answer") as unknown as string));
      const temp: Array<TQuizRequestSubmit> = [];
      getQuestionsData.forEach(() => {
        temp.push({ answer: "", question: "" });
      });
      setQuizRequestSubmit(temp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageAnswer]);

  useEffect(() => {
    if (storedAnswer?.length > 0) {
      setAlreadyReturnQuizProp({ ...getAlreadyReturnQuizProp, status: false });
    } else {
      setAlreadyReturnQuizProp({ ...getAlreadyReturnQuizProp, status: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getQuizRequestSubmit?.length > 0) {
      setNewStoredAnswer(getQuizRequestSubmit);
    }
  }, [getQuizRequestSubmit, setNewStoredAnswer]);

  function duplicateQuizRequestSubmit() {
    const newQuizSubmit: Array<TQuizRequestSubmit> = [...getQuizRequestSubmit];

    const temp: Array<TQuizRequestSubmit> = [];
    for (const obj of newQuizSubmit) {
      temp.push(Object.assign({}, obj));
    }
    return temp;
  }
  function handleSaveAnswer(questionId: string, answerId: string) {
    const isQuestionSame = getQuizRequestSubmit?.some((req) => req.question === questionId);
    const isAnswerSame = getQuizRequestSubmit?.some((req) => req.answer === answerId);

    const newQuizSubmit = duplicateQuizRequestSubmit();
    if (!isQuestionSame && !isAnswerSame && newQuizSubmit !== null) {
      newQuizSubmit[getCurrNumber - 1].answer = answerId;
      newQuizSubmit[getCurrNumber - 1].question = questionId;
      setQuizRequestSubmit(newQuizSubmit);
    }

    if (isQuestionSame && !isAnswerSame) {
      let indexFound: number | undefined = undefined;
      for (let i = 0; i < getQuizRequestSubmit.length; i++) {
        if (getQuizRequestSubmit[i].question === questionId) {
          indexFound = i;
        }
      }

      if (indexFound !== undefined) {
        const newQuizSubmit = duplicateQuizRequestSubmit();
        newQuizSubmit[indexFound].answer = answerId;
        setQuizRequestSubmit(newQuizSubmit);
      } else if (indexFound === undefined) {
        console.log("indexFound variable is undefined!!!");
      }
    }
  }

  function isAnswerAlreadyExist(answerId: string) {
    return getQuizRequestSubmit?.some((req) => req.answer === answerId);
  }
  function handleReturnPayloadReq(): TQuizSubmitPayloadReq {
    const removedHelpKey: TQuestionsAnswersPayloadItem[] = getQuizRequestSubmit.map((quiz) => {
      return Object.keys(quiz).includes("help")
        ? {
            answer: quiz.answer,
            question: quiz.question,
          }
        : { ...quiz };
    });
    const removedEmptyAnswer: TQuestionsAnswersPayloadItem[] = removedHelpKey.filter(
      (quiz) => quiz.answer !== "" || quiz.question !== "",
    );
    return {
      questions_answers: removedEmptyAnswer,
    };
  }

  const payloadReqReturnValue = handleReturnPayloadReq();
  console.log("payload object form: ", dataQuizTake);

  function handleNextButton() {
    if (getCurrNumber < getQuestionsData.length) {
      setCurrNumber(getCurrNumber + 1);
    } else {
      const subjectDetailPath = prevPath.split("/")[2];
      if (subjectDetailPath !== "[subjectName]") {
        const newQuizSubmitPopupValue: TQuizSubmitPopup = {
          ...getQuizSubmitPopup,
          prevPath: prevPath,
          quizTakeId: router.query.quizId as string,
          payloadReq: payloadReqReturnValue,
          status: true,
        };
        setQuizSubmitPopup(newQuizSubmitPopupValue);
      }
    }
  }
  function handleHelpButton() {
    const isQuestionIdSame = getQuizRequestSubmit.some(
      (req) => req.question === getQuestionsData[getCurrNumber - 1].id,
    );
    if (isQuestionIdSame) {
      const temp: Array<TQuizRequestSubmit> = [...getQuizRequestSubmit];
      temp[getCurrNumber - 1] = {
        ...temp[getCurrNumber - 1],
        help: true,
      };
      setQuizRequestSubmit(temp);
    }
  }
  function handleClassNameButtonGroup(index: number) {
    if (
      getQuizRequestSubmit[index] &&
      Object.prototype.hasOwnProperty.call(getQuizRequestSubmit[index], "help")
    ) {
      return `border-2 border-yellow-500 ${
        index + 1 === getCurrNumber
          ? "text-yellow-500 hover:bg-neutral-200"
          : "bg-yellow-500 text-white hover:opacity-75"
      }`;
    }
    if (
      isAnswerAlreadyExist(getQuizRequestSubmit[index]?.answer) &&
      getQuizRequestSubmit[index].answer !== ""
    ) {
      return `bg-primary-500 border-2 border-primary-500 text-neutral-200 hover:opacity-75 ${
        index + 1 === getCurrNumber ? "border-yellow-500" : "border-none"
      }`;
    }
    if (getQuizRequestSubmit[index]?.answer === "") {
      return `text-neutral-500 border hover:bg-neutral-200 hover:text-neutral-800 ${
        index + 1 === getCurrNumber ? "border-primary-500" : "border-none"
      }`;
    }
  }

  return (
    <Fragment>
      {!getAlreadyReturnQuizProp.status ? (
        <ReturnToQuizTake />
      ) : (
        <Fragment>
          <QuizSubmitPopup />
          <QuizQuitPopup />
          <QuizTakeBreadCrumb />
          <div className="px-0 lg:px-[88px]">
            <div className="py-[52px] px-4 sm:px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
              <section className="flex flex-col justify-between py-[44px] mx-auto lg:mx-0 px-5 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-neutral-200 rounded-lg">
                {/* Question section */}
                <p className="text-black text-center w-full text-xl font-semibold ">
                  {getCurrNumber}.{" "}
                  {dataQuizTake &&
                    dataQuizTake?.questions_answers.length > 0 &&
                    getQuestionsData?.[getCurrNumber - 1]?.question}
                </p>
                {/* Answer section */}
                <div className="flex flex-col items-center gap-y-7 w-full min-h-[120px]">
                  {dataQuizTake &&
                    dataQuizTake?.questions_answers.length > 0 &&
                    getQuestionsData?.[getCurrNumber - 1]?.answers.map((answers, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleSaveAnswer(getQuestionsData?.[getCurrNumber - 1]?.id, answers.id)
                        }
                        className={`relative w-full sm:w-[70%] py-4 border-primary-500 border-2 text-base rounded-lg text-primary-500  flex place-content-center hover:bg-primary-500 hover:text-neutral-200 ${
                          isAnswerAlreadyExist(answers.id) && "bg-primary-500 text-neutral-200"
                        }`}
                      >
                        <p className="min-w-[120px] text-left">
                          {String.fromCharCode(97 + index)}. {answers.answer}
                        </p>
                      </button>
                    ))}
                </div>
                {/* Button Section */}
                <div className="w-full flex justify-between sm:justify-around items-center gap-x-4 px-0 sm:px-10">
                  {/* Prev Button */}
                  <button
                    className={`bg-transparent border-2 !h-12
              w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium flex gap-x-2 rounded justify-center items-center hover:bg-neutral-200 ${
                getCurrNumber === 1
                  ? "border-neutral-400 text-neutral-400"
                  : "text-primary-500 border-primary-500"
              }`}
                    disabled={getCurrNumber === 1}
                    onClick={() => {
                      getCurrNumber > 1 && setCurrNumber(getCurrNumber - 1);
                    }}
                  >
                    <IoIosArrowBack />
                    {(windowSize?.width as number) > 640 ? "Sebelumnya" : undefined}
                  </button>
                  {/* Help Button */}
                  <button
                    onClick={handleHelpButton}
                    className="h-12 w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium bg-yellow-500 text-white flex gap-x-2 rounded justify-center items-center hover:opacity-75"
                  >
                    <AiOutlineQuestionCircle />
                    {(windowSize?.width as number) > 640 ? "Ragu-Ragu" : undefined}
                  </button>
                  {/* Next Button */}
                  <button
                    className="flex flex-row-reverse h-12 w-full lg:w-[160px] lg:h-[48px] text-sm sm:text-[16px] font-medium bg-primary-500 text-white gap-x-2 rounded justify-center items-center hover:opacity-75"
                    onClick={handleNextButton}
                  >
                    <IoIosArrowForward />
                    {(windowSize?.width as number) > 640
                      ? getCurrNumber >= getQuestionsData?.length
                        ? "Kirim"
                        : "Selanjutnya"
                      : ""}
                  </button>
                </div>
              </section>
              {/* Timer Section */}
              <section className="flex flex-col h-[232px] gap-5 lg:w-[35%] w-full mx-auto">
                <div className="px-[22px] py-4 border border-solid border-neutral-200 rounded-lg">
                  <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
                  {dataQuizTake && dataQuizTake?.questions_answers.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {[...Array(getQuestionsData?.length)].map((_, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 bg-transparent p-1"
                          onClick={() => {
                            setCurrNumber(index + 1);
                          }}
                        >
                          <button
                            className={`${handleClassNameButtonGroup(
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
                <div className="flex justify-end">
                  <QuizTimer
                    prevPath={prevPath}
                    quizTakeId={router.query.quizId as string}
                    payloadReq={payloadReqReturnValue}
                    expiryTimestamp={dataQuizTake?.duration / 60}
                  />
                </div>
              </section>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
