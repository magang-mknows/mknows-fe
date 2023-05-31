import api from "../../services/api";
export const getMyWorkQuizId = async (subjectID: string, batchID: string) => {
  const { data } = await api.get(`/my-works/quiz/session/${subjectID}/batch/${batchID}`);
  return data;
};
export const getMyWorkTakeQuiz = async (subjectID: string, batchID: string) => {
  const { data } = await api.get(`/my-works/quiz/${subjectID}/batch/${batchID}/take`);
  return data;
};
