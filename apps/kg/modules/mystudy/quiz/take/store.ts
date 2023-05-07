import { atom } from 'recoil';
import { TQuestion } from './type';

export const quizQuestionState = atom<Array<TQuestion>>({
  key: 'quiz-question-state',
  default: [
    {
      id: 1,
      question: 'Berapakah harga yang diharuskan saat 10% bunga dari bank ?',
      choices: ['20.000', '30.000', '50.000', '70.000'],
      rightAnswer: '30.000',
    },
    {
      id: 2,
      question: 'Mengapa dinamakan nasi ?',
      choices: [
        'karena nasi ditemukan di bulan',
        'karena nasi adalah bahasa indonesia',
        'karena lapar',
        'karena memang dari sananya',
      ],
      rightAnswer: 'karena lapar',
    },
    {
      id: 3,
      question: 'Bagaimana cara kita memandang dunia ?',
      choices: [
        'Sesuai dengan kondisi',
        'Dengan sederhana',
        'Dengan Kompleks',
        'Sesuai kepercayaan masing-masing',
      ],
      rightAnswer: 'Sesuai dengan kondisi',
    },
    {
      id: 4,
      question: 'Apa hukum rokok bagi seorang muslim ?',
      choices: ['Halal', 'Makruh', 'Membunuhmu', 'Haram'],
      rightAnswer: 'Membunuhmu',
    },
    {
      id: 5,
      question:
        'Apakah yang harus dilakukan jika keuntungan berbanding terbalik dengan kerugian ?',
      choices: ['sangat baik', 'cukup', 'buruk', 'diperhitungkan kembali'],
      rightAnswer: 'buruk',
    },
  ],
});

export const currentQuizNumberState = atom({
  key: 'currentQuizNumberState',
  default: 1,
});
