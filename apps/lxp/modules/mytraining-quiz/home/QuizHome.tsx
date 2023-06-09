import Image from "next/image";
import { FC, ReactElement } from "react";
import Link from "next/link";
import QuizHomeImage from "../assets/quiz-start.svg";
import { useRouter } from "next/router";
import { TModulParams } from "../../mytraining-module/type";
import { useGetQuizBySessionId } from "./hooks";
import { Button } from "@mknows-frontend-services/components/atoms";

const QuizHome: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: TModulParams = {
    subjectID: query.subjectID as string,
    batchID: query.batchID as string,
  };
  const { data: QuizBySession } = useGetQuizBySessionId(params);
  const quizBySessionData = QuizBySession?.data;

  const remainingAttempt = quizBySessionData?.result?.remaining_attempt as number;

  return (
    <div className="flex flex-col pt-10 items-center gap-y-4 min-h-[705px] px-[20px] md:px-[88px] ">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 ">Quiz Manajemen Keuangan</h1>
        <p className="text-lg  text-neutral-600">Pertemuan 1</p>
      </div>
      <div className="flex flex-col md:flex-row min-h-[550px] items-center gap-11 text-[#171717]">
        <div className="h-[220px] md:h-[550px] w-[220px] md:w-[550px] relative overflow-hidden">
          <Image
            src={QuizHomeImage}
            width={100}
            height={100}
            alt=""
            className="m-auto h-full w-full scale-125 left-0 absolute top-0"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="text-sm">
            <p className="xl:pr-28 mb-4">
              Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi yang telah dipelajari
              di pertemuan ini.
            </p>
            <p className="mb-2">Beberapa ketentuannya sebagai berikut:</p>
            <p className="mb-1">
              Terdapat{" "}
              <span className="font-bold">
                {quizBySessionData?.result?.total_questions} pertanyaan
              </span>{" "}
              yang harus dikerjakan dalam Quiz ini dan Setiap pertanyaan mempunyai bobot Nilai{" "}
              <span className="font-bold">{quizBySessionData?.result?.score_per_point} Poin</span>
            </p>
            <p className="font-bold mb-1">
              Syarat Nilai Kelulusan : {quizBySessionData?.result?.kkm}
            </p>
            <p className="font-bold mb-4">Durasi Ujian : 10 menit</p>
            <p className="mb-4">
              Setelah dimulai, quiz tidak dapat dihentikan, anda harus menyelesaikan quiz hingga
              selesai
            </p>
            <p className="mb-2">
              Anda mempunyai <span className="font-bold">3 kali kesempatan</span> mengulang quiz
            </p>
            <p className="mb-6">
              Apabila tidak memenuhi syarat kelulusan, maka Anda harus menunggu selama 1 menit untuk
              mengulang pengerjaan Quiz kembali.
            </p>
            <p className="">Selamat Mengerjakan!</p>
          </div>
          <section className="flex flex-col gap-y-4">
            <Button
              disabled={remainingAttempt === 0}
              href={`/pelatihanku/quiz/mulai-quiz/${quizBySessionData?.quiz?.id}/${query.batchID}`}
              type="button"
              className="bg-version3-500 border-version3-500 border-2 hover:bg-version2-500 transition-all ease-in-out duration-150 text-neutral-100 px-8 py-2.5 w-[240px] text-sm rounded-md"
            >
              <h1>Mulai Quiz (Sisa {remainingAttempt})</h1>
            </Button>
            <Button
              href={`/pelatihanku/quiz/riwayat/${quizBySessionData?.quiz?.id}/${query.batchID}`}
              type="button"
              className={`border-version3-500 hover:bg-neutral-100 bg-neutral-50 border-2 transition-all ease-in-out duration-150 text-version3-500 px-8 py-2.5 w-[240px]  text-sm rounded-md ${
                remainingAttempt < 3 ? "block" : "hidden"
              }`}
            >
              <h1>Lihat Riwayat Kuis</h1>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
