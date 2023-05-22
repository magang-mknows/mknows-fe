import Image from 'next/image';
import { FC, ReactElement } from 'react';
import quizHomeImg from './assets/quiz-home-person.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGetQuizDescById } from './hooks';
import { TQuizDescItem } from './types';

export const QuizModule: FC = (): ReactElement => {
  const router = useRouter();

  const { data } = useGetQuizDescById(router.query.quizId as unknown as string);
  const dataQuizDesc = data?.data as unknown as TQuizDescItem;
  const prevPath = router.asPath.split('/').slice(0, -1).join('/');

  return (
    <div className="flex flex-col items-center gap-y-4 min-h-[705px] px-[20px] md:px-[88px] mt-8 mb-15">
      <div className="flex flex-col items-center gap-y-[18px] text-center">
        <h1 className="text-4xl font-semibold text-[#171717]">
          Quiz Manajemen Keuangan {/* it has to be from api but... */}
        </h1>
        <p className="text-2xl font-normal text-[#737373]">Pertemuan 1</p>
      </div>
      <div className="flex flex-col md:flex-row min-h-[550px] items-center gap-11 text-[#171717]">
        <div className="h-[220px] md:h-[550px] w-[220px] md:w-[550px] relative overflow-hidden">
          <Image
            src={quizHomeImg}
            alt=""
            className="m-auto h-full w-full scale-125 left-0 absolute top-0"
          />
        </div>
        <div className="flex flex-col gap-y-[39px] h-[475px]">
          <div className="flex flex-col justify-between text-sm h-[380px]">
            <p className="">
              Quiz ini bertujuan untuk menguji pengetahuan Anda tentang materi
              yang telah dipelajari di pertemuan ini.
            </p>
            <p className="">Beberapa ketentuannya sebagai berikut:</p>
            <p className="">
              Terdapat <span className="font-bold">10 pertanyaan</span> yang
              harus dikerjakan dalam Quiz ini dan Setiap pertanyaan mempunyai
              bobot Nilai <span className="font-bold">10 Poin</span>
            </p>
            <p className="font-bold">Syarat Nilai Kelulusan : 80 Poin</p>
            <p className="font-bold">Durasi Ujian : 10 menit</p>
            <p className="">
              Setelah dimulai, quiz tidak dapat dihentikan, anda harus
              menyelesaikan quiz hingga selesai
            </p>
            <p className="">
              Anda mempunyai{' '}
              <span className="font-bold">3 kali kesempatan</span> mengulang
              quiz
            </p>
            <p className="">
              Apabila tidak memenuhi syarat kelulusan, maka Anda harus menunggu
              selama 1 menit untuk mengulang pengerjaan Quiz kembali.
            </p>
            <p className="">Selamat Mengerjakan!</p>
          </div>
          <Link href={`${prevPath}/ambil/${dataQuizDesc?.id}`}>
            <button className="w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] font-medium bg-[#106FA4] text-white  flex gap-x-2 rounded justify-center items-center hover:opacity-75 duration-200">
              Mulai Quiz (Sisa {dataQuizDesc?.remaining_attempt || 'unknown'})
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
