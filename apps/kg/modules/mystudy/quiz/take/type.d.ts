type TQuizTakeItem = {
  type: string;
  duration: number;
  questions_answers: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      answer: string;
    }>;
  }>;
};

export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;

export type TQuestion = {
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};

export type TuseQuizQuestion = {
  setQuestionsData: (val: Array<Question>) => void;
  getQuestionsData: Array<Question>;
};

export type TuseCurrentQuizNumber = {
  setCurrNumber: (val: number) => void;
  getCurrNumber: number;
};
