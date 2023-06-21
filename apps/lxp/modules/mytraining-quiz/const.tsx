export const myTrainingQuizBreadCumbs = [
  {
    name: "Home",
    link: "/dashboard",
  },
  {
    name: "Pelatihan-Ku",
    link: "/pelatihanku",
  },
  {
    name: "Quiz",
    link: `/pelatihanku/quiz`,
  },
];

export const myTrainingHistoryQuizBreadCumbs = (quizID: string, batchID: string) => [
  {
    name: "Home",
    link: "/dashboard",
  },
  {
    name: "Pelatihan-Ku",
    link: "/pelatihanku",
  },
  {
    name: "Riwayat Quiz",
    link: `/pelatihanku/quiz/riwayat/${quizID}/${batchID}`,
  },
];
