import Image from "next/image";
import { FC, ReactElement } from "react";
// import LayoutProvider from "@/providers/LayoutProvider";
import Link from "next/link";
import QuizHomeImage from "../assets/quiz-start.svg";
import { useGetMyWorkQuizId } from "../hooks";
import { useRouter } from "next/router";
import { TModulParams } from "../../mytraining-module/type";

const QuizHome: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: TModulParams = {
    subjectID: query.subjectID as string,
    batchID: query.batchID as string,
  };
  const { data } = useGetMyWorkQuizId(params);
  console.log("tes", data);
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
              Terdapat <span className="font-bold">10 pertanyaan</span> yang harus dikerjakan dalam
              Quiz ini dan Setiap pertanyaan mempunyai bobot Nilai{" "}
              <span className="font-bold">10 Poin</span>
            </p>
            <p className="font-bold mb-1">Syarat Nilai Kelulusan : 80 Poin</p>
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
          <Link href={`/pelatihanku/quiz/mulai-quiz/${data?.data?.quiz?.id}/${query.batchID}`}>
            <button className="bg-version3-500 hover:bg-version2-500 transition-all ease-in-out duration-150 text-neutral-100 px-8 py-2.5 w-fit rounded-md">
              Mulai Quiz (Sisa {data?.data?.countQuiz})
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
