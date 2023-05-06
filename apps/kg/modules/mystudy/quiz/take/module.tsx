import { FC, ReactElement } from 'react';
import { QuizTimer } from './components/quiz-timer';
import { useWindowSize } from '../../../common/hooks/use-window-size';
import { useCurrentQuizNumber, useQuizQuestion } from './hooks';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

// import { useRouter } from 'next/router';

export const QuizTakeModule: FC = (): ReactElement => {
  const windowSize = useWindowSize();
  const { getQuestionsData } = useQuizQuestion();
  // const router = useRouter();

  // const id = "0ac8c4a7-b22b-4284-9d82-d6ec6066d143";
  // const { data: quizData } = useGetQuizById(id);
  // console.log("tes ", quizData?.data);

  // onClick toggle
  // const tempArray = getData[0].choices.map(() => false);
  // const [selectedChoice, setSelectedChoice] = useState<boolean[]>(tempArray);
  // current index state
  // const [currentIndexQuestion, setCurrentIndexQuestion] = useState<number>(0);

  const { getCurrNumber, setCurrNumber } = useCurrentQuizNumber();

  return (
    <div className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <div className="flex flex-col justify-between py-[44px] mx-auto lg:mx-0 px-0 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg">
          <p className="text-black text-center w-full text-xl font-semibold ">
            {getCurrNumber}. {getQuestionsData[getCurrNumber - 1].question}
          </p>
          <div className="flex flex-col items-center justify-between w-full h-[320px]">
            {getQuestionsData[getCurrNumber - 1].choices?.map(
              (choice: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative w-[70%] py-4 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4]  flex place-content-center hover:bg-primary-500 hover:text-neutral-200"
                  >
                    <label htmlFor={`${choice}`}>
                      {String.fromCharCode(97 + index)}. {choice}
                    </label>
                    <input
                      data-id={choice}
                      id={`${choice}`}
                      onChange={(e) => {
                        console.log(e.target.id);
                      }}
                      type="radio"
                      name="choice"
                      className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
                    />
                  </div>
                );
              }
            )}
          </div>

          {/* <div className="flex flex-col justify-between w-[80%] lg:w-[540px] h-[320px]">
            {getData[currentIndexQuestion].choices.map((choice: any, i: any) => (
              <div
                key={i}
                className={`${
                  selectedChoice[i] ? "bg-[#106FA4] text-[#FAFAFA]" : "hover:bg-blue-200"
                } relative w-full py-4 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4]  flex place-content-center`}
              >
                <label htmlFor="" className="">
                  {String.fromCharCode(97 + i)}. {choice}
                </label>
                <input
                  id={`${choice}`}
                  type="radio"
                  name="choice"
                  value={choice}
                  onChange={() => {
                    const newArr = selectedChoice.map(() => false);
                    newArr[i] = true;
                    setSelectedChoice(newArr);
                  }}
                  className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
                />
              </div>
            ))}
          </div> */}
          <div className="w-full flex justify-around items-center gap-x-4 px-10">
            <button
              className="border-[#106FA4] bg-transparent border-2 text-[#106FA4] !h-12
              w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium flex gap-x-2 rounded justify-center items-center hover:opacity-50"
              onClick={() => {
                getCurrNumber > 1 && setCurrNumber(getCurrNumber - 1);
              }}
            >
              <IoIosArrowBack color="#106FA4" />
              {(windowSize?.width as number) > 640 ? 'Sebelumnya' : undefined}
            </button>

            <button className="h-12 w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium bg-[#FAB317] text-white flex gap-x-2 rounded justify-center items-center hover:opacity-50">
              <AiOutlineQuestionCircle />
              {(windowSize?.width as number) > 640 ? 'Ragu-Ragu' : undefined}
            </button>

            <button
              className="flex flex-row-reverse h-12 w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium bg-[#106FA4] text-white gap-x-2 rounded justify-center items-center hover:opacity-50"
              onClick={() => {
                getCurrNumber < getQuestionsData.length &&
                  setCurrNumber(getCurrNumber + 1);
              }}
            >
              <IoIosArrowForward />
              {(windowSize?.width as number) > 640 ? 'Selanjutnya' : undefined}
            </button>
          </div>
        </div>

        <div className="flex flex-col h-[232px] gap-5 lg:w-[35%] w-full mx-auto">
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
            <div className="flex flex-wrap gap-1">
              {[...Array(getQuestionsData.length)].map((data, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-transparent p-1"
                  onClick={() => setCurrNumber(index + 1)}
                >
                  <button
                    className={`${
                      index + 1 === getCurrNumber ? 'border-primary-500' : ''
                    } text-neutral-500 w-full h-full  border-2 hover:bg-neutral-200 hover:text-neutral-800 transition-colors ease-in-out duration-300 rounded-lg m-auto text-base font-bold `}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <QuizTimer expiryTimestamp={2 / 60} />
          </div>
        </div>
      </div>
    </div>
  );
};
