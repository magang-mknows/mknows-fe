import { Button } from "@mknows-frontend-services/components/atoms";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRecoilState } from "recoil";
import { currentQuestionState } from "./store";

export const Question = () => {
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
  const [getCurrentNumber, setCurrentNumber] = useRecoilState(currentQuestionState);

  return (
    <div className=" border-2 rounded-md w-full border-neutral-100  py-10 px-8">
      {questions.map((question, index) => {
        return (
          <div key={index} className={`${index + 1 === getCurrentNumber ? "block" : "hidden"}`}>
            <div className="flex mb-6">
              <h1 className="text-neutral-800 text-center font-bold text-base">
                {index + 1}. {question.question}
              </h1>
            </div>
            {question.answers.map((answer, index) => {
              return (
                <label
                  key={index}
                  className="relative mb-5 min-w-[600px] py-3 border-version3-300 border-2 text-sm rounded-lg text-version3-300 cursor-pointer hover:bg-neutral-100 transition-all ease-in-out duration-75 hover:font-bold block "
                  htmlFor={answer.id}
                  id={answer.id}
                >
                  <h1 className="text-center">
                    {String.fromCharCode(96 + (index + 1)).toUpperCase()}. {answer.answer}
                  </h1>
                  <input
                    value={answer.id}
                    id={answer.id}
                    type="radio"
                    name="choice"
                    className=" h-full w-full peer absolute top-0 cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        );
      })}

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
          type="button"
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
              console.log("habis");
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
};
