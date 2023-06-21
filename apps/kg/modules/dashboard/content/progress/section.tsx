import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import moreIcon from "../../assets/LihatSemua.svg";
import { useDashboardData } from "../../hooks";
import progressStyle from "./progress.module.css";
import { RxDividerVertical } from "react-icons/rx";

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
    setMore((prev) => !prev);
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
              className="progressBox bg-white w-full relative flex gap-x-4 gap-y-[20px] rounded-lg p-5 border-[#F5F5F5] border-[1px] border-solid"
            >
              <Image
                className="rounded-lg w-[100px] h-[100px] object-cover"
                src={subject?.thumbnail}
                width={100}
                height={100}
                alt="tes"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                <div>
                  <p className="text-base font-semibold mb-[12px]">{subject?.name}</p>
                  <div className="flex items-center gap-x-2 text-neutral-500 text-sm font-normal mb-[17px]">
                    <p>Semester {subject?.subject_semester}</p>
                    <RxDividerVertical className="scale-y-125" />
                    <p>{subject?.subject_code}</p>
                  </div>
                  <div className="flex justify-between lg:justify-normal lg:grid lg:grid-cols-8 gap-x-2 items-center mb-3">
                    <progress
                      className={`${progressStyle.progress} col-span-5 h-[10px] rounded-lg overflow-hidden`}
                      max="100"
                      value={`${subject?.progress_percentage}`}
                    />
                    <p className="col-span-1 text-[14px] text-neutral-500 font-normal inline mt-0 leading-none">
                      {subject?.current_session}/{subject?.session_count}
                      <span className="ml-1 text-[12px]">Pertemuan</span>
                    </p>
                  </div>
                </div>
                {subject?.progress_percentage < 100 ? (
                  <button className="bg-primary-500 w-fit h-fit text-white text-sm font-medium px-5 py-2 hover:bg-primary-600 transition-colors ease-in-out duration-300 rounded-md justify-self-end">
                    Lanjut Belajar
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-neutral-300 w-fit h-fit text-white text-sm font-medium px-5 py-2 rounded-md justify-self-end"
                  >
                    Selesai
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
