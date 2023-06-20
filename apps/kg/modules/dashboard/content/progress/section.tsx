import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import dummyImg from "../../assets/dummyCourse.png";
import moreIcon from "../../assets/LihatSemua.svg";
import { useDashboardData } from "../../hooks";

export const ProgressSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const subjectProgress = getDashboardData?.subject_progress;
  const [more, setMore] = useState(false);
  let lengthData = 0;

  if (subjectProgress && more) {
    lengthData = subjectProgress?.dataSubjects?.length as number;
  }
  if (subjectProgress && !more) {
    lengthData = 3;
  }
  const handleMore = (): void => {
    setMore(!more);
  };
  return (
    <section className="bg-white w-full pt-[28px] px-[24px] rounded-md pb-[44px] mb-[48px]">
      <p className="font-semibold text-xl text-neutral-900 mb-[8px] ">Lanjutkan Mata Kuliah Kamu</p>
      <p className="text-sm font-normal text-neutral-900">Semester 1</p>
      <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
        {subjectProgress?.dataSubjects?.slice(0, lengthData)?.map((subject, i) => {
          return (
            <div
              key={i}
              className="progressBox bg-white w-full relative grid grid-cols-12 gap-x-4 gap-y-[20px] rounded-lg px-5 py-5 border-[#F5F5F5] border-[1px] border-solid"
            >
              <Image
                className=" lg:col-span-2 rounded-lg w-[100px] h-[100px] object-cover md:col-span-12 col-span-12"
                src={subject?.thumbnail}
                width={100}
                height={100}
                alt="tes"
              />
              <div className=" lg:col-span-10 lg:flex lg:justify-between items-center w-full col-span-12">
                <div>
                  <p className="mb-[12px]">{subject?.name}</p>
                  <p className="text-neutral-500 text-[12px] font-normal mb-[17px] mt-0">
                    Semester {subject?.subject_semester}
                  </p>
                  <div className="bg-neutral-350 w-[200px] md:w-[300px] rounded-lg h-[10px] lg:inline-block md:inline-block lg:relative lg:bottom-2 md:relative md:bottom-2 mt-0 mr-[12px] mb-0">
                    <span
                      style={{ width: `${subject?.progress_percentage}%` }}
                      className="inline-block bg-primary-500 rounded-lg h-[10px] text-[0px]"
                    />
                  </div>{" "}
                  <p className="text-[14px] text-neutral-500 font-normal inline mt-0 leading-none">
                    {subject?.current_session}/{subject?.session_count}
                    <span className="text-[12px]">Pertemuan</span>
                  </p>
                </div>
                {subject?.progress_percentage != "100" ? (
                  <button className="bg-primary-500 h-fit text-neutral-200 text-sm px-6 py-3 hover:bg-primary-600 transition-colors lg:w-[200px] ease-in-out duration-300 rounded-md w-full">
                    Lanjut Belajar
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-neutral-300 h-fit lg:w-[200px] text-neutral-200 text-sm px-6 py-3 rounded-md w-full"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {(subjectProgress?.dataSubjects?.length as number) > 3 && (
          <button onClick={handleMore}>
            <p className="text-center text-[12px] text-neutral-500 font-normal mb-[16px]">
              {more ? "Lihat Lebih Sedikit" : "Lihat Semua"}
            </p>
            <Image className={`mx-auto ${more && "rotate-180"}`} src={moreIcon} alt="Lihat Semua" />
          </button>
        )}
      </div>
    </section>
  );
};
