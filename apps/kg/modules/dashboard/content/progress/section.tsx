import { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import dummyImg from '@/assets/dashboard/dummyCourse.png';
import moreIcon from '@/assets/dashboard/LihatSemua.svg';
import { useRecoilValue } from 'recoil';
import { ProgressState, progressSectionDummyData as dataDummy } from './store';

const ProgressSection: FC = (): ReactElement => {
  const getProgress = useRecoilValue(ProgressState);
  const [more, setMore] = useState(false);
  let lengthData = 0;
  if (more) {
    lengthData = dataDummy.length;
  } else {
    lengthData = 3;
  }
  const handleMore = (): void => {
    setMore(!more);
    console.log(more);
  };
  return (
    <section className="bg-white dark:bg-[#1B1E21] w-full pt-[28px] px-[24px] rounded-md pb-[44px] mb-[48px]">
      <p className="font-semibold text-xl text-[#171717] dark:text-white mb-[8px] ">
        Lanjutkan Mata Kuliah Kamu
      </p>
      <p className="text-sm font-normal text-[#171717] dark:text-white/80">
        Semester 1
      </p>
      <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
        {getProgress.slice(0, lengthData).map((dummy, i) => {
          const percent = Math.floor(
            (dummy.pertemuanDone / dummy.totalPertemuan) * 100
          ).toString();
          const classDiv = `${percent}%`;
          return (
            <div
              key={i}
              className="progressBox bg-white dark:bg-[#222529] w-full relative grid grid-cols-12 gap-x-4 gap-y-[20px] rounded-lg px-5 py-5 border-[#F5F5F5] dark:border-[#222529] border-[1px] border-solid"
            >
              <Image
                className=" lg:col-span-2 rounded-lg w-[100px] h-[100px] object-cover md:col-span-12 col-span-12"
                src={dummyImg}
                alt="tes"
              />
              <div className=" lg:col-span-10 lg:flex lg:justify-between items-center w-full col-span-12">
                <div>
                  <p className="mb-[12px]">{dummy.judul}</p>
                  <p className="text-[#737373] text-[12px] font-normal mb-[17px] mt-0">
                    Semester {dummy.semester} | {dummy.subjudul}
                  </p>
                  <div className="bg-[#D9D9D9] w-[200px] md:w-[300px] rounded-lg h-[10px] lg:inline-block md:inline-block lg:relative lg:bottom-2 md:relative md:bottom-2 mt-0 mr-[12px] mb-0">
                    <div
                      style={{ width: classDiv }}
                      className="bg-[#106FA4] dark:bg-[#17A2B8]  rounded-lg h-[10px] text-[0px]"
                    >
                      .
                    </div>
                  </div>{' '}
                  <p className="text-[14px] text-[#737373] font-normal inline mt-0 leading-none">
                    {dummy.pertemuanDone}/{dummy.totalPertemuan}
                    <span className="text-[12px]">Pertemuan</span>
                  </p>
                </div>
                {percent != '100' ? (
                  <button className="bg-primary-500 dark:bg-[#17A2B8] h-fit  text-neutral-200 text-sm px-6 py-3 hover:bg-primary-600 transition-colors lg:w-[200px] ease-in-out duration-300 rounded-md w-full">
                    Lanjut Belajar
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-neutral-300 dark:text-neutral-200 dark:bg-neutral-700 h-fit lg:w-[200px] text-neutral-200 text-sm px-6 py-3 rounded-md w-full"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <button onClick={handleMore}>
          <p className="text-center text-[12px] text-[#737373] font-normal mb-[16px]">
            {more ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
          </p>
          <Image
            className={`mx-auto ${more && 'rotate-180'}`}
            src={moreIcon}
            alt="Lihat Semua"
          />
        </button>
      </div>
    </section>
  );
};

export default ProgressSection;
