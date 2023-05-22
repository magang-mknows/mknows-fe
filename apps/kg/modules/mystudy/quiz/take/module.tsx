import { FC, ReactElement, useEffect, useMemo } from 'react';
import { QuizTimer } from './components/quiz-timer';
import { useWindowSize } from '../../../common/hooks/use-window-size';
import {
  useAutoSaveQuizAnswer,
  useCurrentQuizNumber,
  useGetQuizTakeById,
  useQuizQuestion,
  useQuizRequestSubmit,
} from './hooks';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import { TQuizRequestSubmit, TQuizTakeItem } from './type';

export const QuizTakeModule: FC = (): ReactElement => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const { getQuestionsData, setQuestionsData } = useQuizQuestion();
  const { getCurrNumber, setCurrNumber } = useCurrentQuizNumber();
  const prevPath = router.asPath.split('/').slice(0, -1).join('/');

  const { data } = useGetQuizTakeById(router.query.quizTakeId as string);
  // const dataQuizTake: TQuizTakeItem = data?.data;
  const dataQuizTake: TQuizTakeItem = useMemo(() => {
    return {
      type: 'QUIZ',
      duration: 3200,
      questions_answers: [
        {
          id: 'question-1',
          question:
            'Mengapa dibutuhkan dua ekor tupai untuk memasang satu buah bola lampu?',
          answers: [
            {
              id: 'memski4241',
              answer: 'karena memasang lampu itu sulit',
            },
            {
              id: 'kuntul123',
              answer: 'karena mereka jelek',
            },
          ],
        },
        {
          id: 'question-2',
          question: 'Siapakah presiden indonesisa ke-8',
          answers: [
            {
              id: 'imsama146463',
              answer: 'Mega-chan',
            },
            {
              id: 'imam124145r4',
              answer: 'Optimus-chan',
            },
            {
              id: 'yassalam145231',
              answer: 'Bumblebee-chan',
            },
            {
              id: 'yayaya124t234',
              answer: 'Starscream-chan',
            },
            {
              id: 'bleh141251',
              answer: 'Sam-chan',
            },
          ],
        },
      ],
    };
  }, []);

  useEffect(() => {
    setQuestionsData(dataQuizTake?.questions_answers);
  }, [setQuestionsData, dataQuizTake]);

  const { getQuizRequestSubmit, setQuizRequestSubmit } = useQuizRequestSubmit();
  const { setNewStoredAnswer, resetStoredAnswer } = useAutoSaveQuizAnswer();

  useEffect(() => {
    if (getQuizRequestSubmit.length > 0) {
      setNewStoredAnswer(getQuizRequestSubmit);
    }
  }, [getQuizRequestSubmit]);

  function handleSaveAnswer(questionId: string, answerId: string) {
    const isQuestionSame = getQuizRequestSubmit.some(
      (req) => req.question === questionId
    );
    const isAnswerSame = getQuizRequestSubmit.some(
      (req) => req.answer === answerId
    );

    if (!isQuestionSame && !isAnswerSame) {
      const newQuizSubmit: Array<TQuizRequestSubmit> = [
        ...getQuizRequestSubmit,
        {
          answer: answerId,
          question: questionId,
        },
      ];
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
        const newQuizSubmit: Array<TQuizRequestSubmit> = [
          ...getQuizRequestSubmit,
        ];
        const temp: Array<TQuizRequestSubmit> = [];
        for (const obj of newQuizSubmit) {
          temp.push(Object.assign({}, obj));
        }
        temp[indexFound].answer = answerId;
        setQuizRequestSubmit(temp);
      } else if (indexFound === undefined) {
        console.log('indexFound variable is undefined!!!');
      }
    }
    // next step: save global state into local storage
  }

  function isAnswerAlreadyExist(answerId: string) {
    return getQuizRequestSubmit.some((req) => req.answer === answerId);
  }
  function handleNextButton() {
    if (getCurrNumber < getQuestionsData.length) {
      setCurrNumber(getCurrNumber + 1);
    } else {
      router.push(`${prevPath}/${router.query.quizTakeId}`);
      resetStoredAnswer();
    }
  }
  function handleHelpButton() {
    const isQuestionIdSame = getQuizRequestSubmit.some(
      (req) => req.question === getQuestionsData[getCurrNumber - 1].id
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
    // if (getQuizRequestSubmit[index]?.hasOwnProperty('help')) {
    if (
      Object.prototype.hasOwnProperty.call(getQuizRequestSubmit[index], 'help')
    ) {
      return `border-2 border-yellow-500 ${
        index + 1 === getCurrNumber
          ? 'text-yellow-500 hover:bg-neutral-200'
          : 'bg-yellow-500 text-white hover:opacity-75'
      }`;
    }
    if (isAnswerAlreadyExist(getQuizRequestSubmit[index]?.answer)) {
      return `bg-primary-500 border-2 border-primary-500 text-neutral-200 hover:opacity-75 ${
        index + 1 === getCurrNumber ? 'border-yellow-500' : 'border-none'
      }`;
    } else if (!isAnswerAlreadyExist(getQuizRequestSubmit[index]?.answer)) {
      return `text-neutral-500 border hover:bg-neutral-200 hover:text-neutral-800 ${
        index + 1 === getCurrNumber ? 'border-primary-500' : 'border-none'
      }`;
    }
  }

  return (
    <div className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-4 sm:px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <div className="flex flex-col justify-between py-[44px] mx-auto lg:mx-0 px-5 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg">
          {/* Question section */}
          <p className="text-black text-center w-full text-xl font-semibold ">
            {getCurrNumber}.{' '}
            {dataQuizTake &&
              dataQuizTake?.questions_answers.length > 0 &&
              getQuestionsData[getCurrNumber - 1]?.question}
          </p>
          {/* Answer section */}
          <div className="flex flex-col items-center gap-y-7 w-full min-h-[120px]">
            {dataQuizTake &&
              dataQuizTake?.questions_answers.length > 0 &&
              getQuestionsData[getCurrNumber - 1]?.answers.map(
                (answers, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleSaveAnswer(
                        getQuestionsData[getCurrNumber - 1]?.id,
                        answers.id
                      )
                    }
                    className={`relative w-full sm:w-[70%] py-4 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4]  flex place-content-center hover:bg-primary-500 hover:text-neutral-200 ${
                      isAnswerAlreadyExist(answers.id) &&
                      'bg-primary-500 text-neutral-200'
                    }`}
                  >
                    <p className="min-w-[120px] text-left">
                      {String.fromCharCode(97 + index)}. {answers.answer}
                    </p>
                  </button>
                )
              )}
          </div>
          {/* Button Section */}
          <div className="w-full flex justify-between sm:justify-around items-center gap-x-4 px-0 sm:px-10">
            {/* Prev Button */}
            <button
              className={`bg-transparent border-2 !h-12
              w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium flex gap-x-2 rounded justify-center items-center hover:bg-neutral-200 ${
                getCurrNumber === 1
                  ? 'border-neutral-400 text-neutral-400'
                  : 'text-[#106FA4] border-[#106FA4]'
              }`}
              disabled={getCurrNumber === 1}
              onClick={() => {
                getCurrNumber > 1 && setCurrNumber(getCurrNumber - 1);
              }}
            >
              <IoIosArrowBack />
              {(windowSize?.width as number) > 640 ? 'Sebelumnya' : undefined}
            </button>
            {/* Help Button */}
            <button
              onClick={handleHelpButton}
              className="h-12 w-full lg:w-[160px] lg:h-[48px] text-[16px] font-medium bg-[#FAB317] text-white flex gap-x-2 rounded justify-center items-center hover:opacity-75"
            >
              <AiOutlineQuestionCircle />
              {(windowSize?.width as number) > 640 ? 'Ragu-Ragu' : undefined}
            </button>
            {/* Next Button */}
            <button
              className="flex flex-row-reverse h-12 w-full lg:w-[160px] lg:h-[48px] text-sm sm:text-[16px] font-medium bg-[#106FA4] text-white gap-x-2 rounded justify-center items-center hover:opacity-75"
              onClick={handleNextButton}
            >
              <IoIosArrowForward />
              {(windowSize?.width as number) > 640
                ? getCurrNumber >= getQuestionsData.length
                  ? 'Kirim'
                  : 'Selanjutnya'
                : ''}
            </button>
          </div>
        </div>
        {/* Timer Section */}
        <div className="flex flex-col h-[232px] gap-5 lg:w-[35%] w-full mx-auto">
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
            {dataQuizTake && dataQuizTake?.questions_answers.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {[...Array(getQuestionsData.length)].map((_, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-transparent p-1"
                    onClick={() => {
                      setCurrNumber(index + 1);
                    }}
                  >
                    <button
                      className={`${handleClassNameButtonGroup(
                        index
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
              quizTakeId={router.query.quizTakeId as string}
              expiryTimestamp={2 / 60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
