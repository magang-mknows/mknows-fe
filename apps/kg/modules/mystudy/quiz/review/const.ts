import { TQuizReviewItem } from './types';

export const dummyQuizReview: Array<TQuizReviewItem> = [
  {
    question: 'kenapa harus ada penderitaan di dunia ini?',
    answers: [
      {
        answer: 'karena takdirnya begitu',
        is_correct: true,
        is_selected: false,
      },
      {
        answer: 'sebagai pembelajaran bagi manusia',
        is_correct: false,
        is_selected: false,
      },
      {
        answer: 'agar manusia sadar bahwa Tuhan itu ada',
        is_correct: false,
        is_selected: true,
      },
    ],
  },
  {
    question:
      'Jika Tuhan adalah maha kuasa, maka apakah Dia bisa menciptakan batu yang tidak bisa diangkat-Nya?',
    answers: [
      {
        answer: 'Bisa',
        is_correct: false,
        is_selected: false,
      },
      {
        answer: 'Tidak Bisa',
        is_correct: false,
        is_selected: false,
      },
      {
        answer: 'Tidak Tahu',
        is_correct: false,
        is_selected: false,
      },
      {
        answer: 'Pertanyaannya sudah ngaco',
        is_correct: true,
        is_selected: true,
      },
    ],
  },
  {
    question: 'Apakah anda gay?',
    answers: [
      {
        answer: 'Ya',
        is_correct: false,
        is_selected: false,
      },
      {
        answer: 'Betul',
        is_correct: false,
        is_selected: true,
      },
      {
        answer: 'Mpssshhhh....',
        is_correct: true,
        is_selected: false,
      },
    ],
  },
];
