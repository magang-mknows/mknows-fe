export type TQuizTakeItem = {
  type: string;
  duration: number;
  questions_answers: Array<TQuizQuestionsAnswers>;
};

export type TQuizQuestionsAnswers = {
  id: string;
  question: string;
  answers: Array<{
    id: string;
    answer: string;
  }>;
};

export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;

export type TQuizRequestSubmit = {
  question: string;
  answer: string;
  help?: boolean;
};

export type TQuestion = {
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};

export type TuseQuizQuestion = {
  setQuestionsData: (val: Array<TQuizQuestionsAnswers>) => void;
  getQuestionsData: Array<TQuizQuestionsAnswers>;
};

export type TuseQuizRequestSubmit = {
  setQuizRequestSubmit: (val: Array<TQuizRequestSubmit>) => void;
  getQuizRequestSubmit: Array<TQuizRequestSubmit>;
};

export type TuseCurrentQuizNumber = {
  setCurrNumber: (val: number) => void;
  getCurrNumber: number;
};
