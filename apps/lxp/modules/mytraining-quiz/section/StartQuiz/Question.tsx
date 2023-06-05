import { Button } from "@mknows-frontend-services/components/atoms";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRecoilState } from "recoil";
import { currentQuestionState } from "./store";
import { useCallback, useEffect, useState } from "react";
import { TStoreQuestionAnswer } from "./types";

export const Question = () => {
  // ================================
  // create dummy data for wating api
  // =================================
  const dummyResponse = {
    type: "QUIZ",
    questions_answers: [
      {
        id: "40de14c1-f155-4345-a9d0-03d3a6cfdc85",
        question: "Seseorang yang melakukan santet disebut?",
        answers: [
          {
            id: "eaa7e7b1-6bab-49ff-95f1-9bfb1ed50b66",
            answer: "Dukun",
          },
          {
            id: "1b14e9e1-2915-4861-938a-601eb4764a5f",
            answer: "Pendekar",
          },
          {
            id: "726790f5-6b9b-42db-9e6a-f6a85f93eb4f",
            answer: "Pembunuh",
          },
          {
            id: "7fd8339c-4087-4c86-9330-e6620797c5e5",
            answer: "Pemadam Kebakaran",
          },
        ],
      },
      {
        id: "e88efff6-2bd0-469b-bf3d-b7914476bc24",
        question: "Apa yang terjadi jika kamu kena santet?",
        answers: [
          {
            id: "aa4d6c27-35d7-4a61-9962-4f176f9b3a93",
            answer: "Diam Saja",
          },
          {
            id: "34a1bbf0-4c10-4cf2-894c-2ea79514ff73",
            answer: "Turu Saja",
          },
          {
            id: "a8273b3d-cec2-4f10-b9a0-ef12e311dcc7",
            answer: "Santet Balik",
          },
          {
            id: "67ad9980-200a-4c7e-914b-3ca6a17f1980",
            answer: "Berdoa Kepada Tuhan",
          },
        ],
      },
      {
        id: "7e756952-2131-4630-a1ce-e7c196e36af3",
        question: "Ilmu santet terkuat?",
        answers: [
          {
            id: "8526ade3-3204-4c46-989d-413ff7d0fe4b",
            answer: "Santet Leak Bali",
          },
          {
            id: "174ebcc0-51fa-4595-9f19-e1ef76e8fb9c",
            answer: "Santet Banyuwangi",
          },
          {
            id: "497580b4-e0d7-4bc9-8baa-49fb453326fa",
            answer: "Santet Dayak",
          },
          {
            id: "7e91dcec-71e2-4bc2-b8bc-6409abbb5795",
            answer: "Santet Lawu",
          },
        ],
      },
    ],
    duration: 3000,
  };
  const questions = dummyResponse.questions_answers;

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
  const storeDatatoLocalStorage = useCallback(() => {
    const recentAnswer = JSON.stringify(questionsAnswer);
    localStorage.setItem("questions_answers", recentAnswer);
  }, [questionsAnswer]);

  const storeCurrentNumber = useCallback(() => {
    const currentNumber = JSON.stringify(getCurrentNumber);
    localStorage.setItem("current_number", currentNumber);
  }, [getCurrentNumber]);

  // ==============================
  // handle answer and doubt answer
  // ===============================
  const handleAnswerChange = (questionId: string, answerId: string) => {
    const asnweredQueston = questionsAnswer.filter((obj) => obj.ques_id === questionId);
    if (asnweredQueston.length > 0) {
      asnweredQueston[0].ans_id = answerId;
    } else {
      setQuestionsAnswer((prev) => [...prev, { ans_id: answerId, ques_id: questionId }]);
    }
    storeDatatoLocalStorage();
  };

  const handleDoubtAnswer = (questionId: string, doubt: boolean) => {
    const answeredQueston = questionsAnswer.filter((obj) => obj.ques_id === questionId);
    if (answeredQueston.length > 0) {
      answeredQueston[0].doubt = doubt;
    } else {
      setQuestionsAnswer((prev) => [...prev, { doubt: doubt, ques_id: questionId }]);
    }
    storeDatatoLocalStorage();
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
    const storedData = localStorage.getItem("questions_answers");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setQuestionsAnswer(parsedData);
    }
  }, []);

  useEffect(() => {
    storeDatatoLocalStorage();
  }, [storeDatatoLocalStorage]);

  useEffect(() => {
    const storedData = localStorage.getItem("current_number");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentNumber(parsedData);
    }
  }, [setCurrentNumber]);

  useEffect(() => {
    storeCurrentNumber();
  }, [storeCurrentNumber]);

  return (
    <div className="grid grid-cols-3 p-8  lg:gap-[52px]">
      <div className=" col-span-2 border-2 rounded-md w-full border-neutral-100  py-10 px-8">
        {questions.map((question, index) => {
          return (
            <div key={index} className={`${index + 1 === getCurrentNumber ? "block" : "hidden"}`}>
              <div className="flex mb-6">
                <h1 className="text-neutral-800 text-center font-bold text-base">
                  {index + 1}. {question.question}
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                {question.answers.map((answer, index) => (
                  <label
                    key={answer.id}
                    className={`w-full h-10 text-sm px-2 rounded-md shadow-sm flex items-center border-[1px] border-version3-300 ${
                      questionsAnswer.some(
                        (obj) => answer.id === obj.ans_id || selectedOption === answer.id,
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
                    {String.fromCharCode(96 + (index + 1)).toUpperCase()}. {answer.answer}
                  </label>
                ))}
              </div>
              <div className="flex gap-4 mt-12">
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
                  className="flex gap-2 w-full  items-center px-4 py-3 justify-center bg-[#FAB317] border-2 border-[#FAB317] rounded-md shadow-sm hover:bg-[#e1a015]"
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
                      console.log("hasil", questionsAnswer);
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
          {questions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCurrentNumber(index + 1);
                }}
                className={`${
                  index + 1 === (getCurrentNumber as number) ? "bg-neutral-200" : "bg-neutral-50 "
                } ${
                  questionsAnswer.some((obj) => obj.ques_id === item.id)
                    ? "bg-version3-300 text-white"
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
