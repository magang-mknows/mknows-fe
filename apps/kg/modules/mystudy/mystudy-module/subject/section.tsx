import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { Card } from '@mknows-frontend-services/components/molecules';
import { TDataSubject } from '../types';
import OrangBingungIcon from '../assets/orang-bingung.svg';
import { AiOutlineSearch } from 'react-icons/ai';

export const SubjectSection: FC<{ dataSubjectProps: Array<TDataSubject> }> = ({
  dataSubjectProps,
}): ReactElement => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-2xl">Mata Kuliah</h1>
        <div className="bg-gray-200 w-full mt-6 rounded-[8px] px-6 py-4">
          <div className="flex gap-x-6">
            <div className="text-4xl text-[#A3A3A3] font-bold">
              <AiOutlineSearch />
            </div>
            <input
              type={'text'}
              value=""
              className="bg-transparent w-full focus:outline-none"
              placeholder="Cari Mata Kuliah"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-7 gap-x-9 mt-[30px] pb-40">
        {dataSubjectProps?.length === 0 ? (
          <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
            <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
              <Image src={OrangBingungIcon} alt="simulasi-null" />
            </div>
            <h1 className="text-xl font-bold">Tidak Ada Data Mata Kuliah</h1>
          </div>
        ) : (
          <>
            {dataSubjectProps?.length > 0 &&
              dataSubjectProps?.map((subject, index) => (
                <Card
                  href={`/studi-ku/${subject.id}`}
                  key={subject.id}
                  className="rounded-lg px-3"
                  hasImage={true}
                  imgwidth={240}
                  imgheight={240}
                  imgStyle="rounded-lg lg:h-[240px] lg:w-full object-scale-down mx-auto md:mx-0"
                  src={subject.thumbnail || OrangBingungIcon}
                  titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                  icon={
                    <div className="flex justify-end gap-2">
                      <div className="text-[#FAB317] py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-[#FEF6D0]">
                        {subject.credit} SKS
                      </div>
                      <div className="text-[#106FA4] py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-[#E9F6FD]">
                        {subject.session_count} Pertemuan
                      </div>
                    </div>
                  }
                >
                  <div className="flex flex-col w-full">
                    <p className="text-sm text-[#A3A3A3]">
                      {subject.subject_code}
                    </p>
                    <h1 className="text-base font-bold mt-0 text-[#106FA4] w-full">
                      Matkul {subject.name}
                    </h1>
                    <p className="text-sm text-[#A3A3A3] pb-5">
                      {subject.teacher_name}
                    </p>
                    <div className="flex w-[100%] bg-[#D9D9D9] rounded-full h-2.5">
                      <div
                        className="bg-[#3EB449] h-2.5 rounded-full"
                        style={{ width: `${subject.progress_percentage}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-[#A3A3A3] text-base pt-[76px] pl-2">
                    {subject.progress_percentage}%
                  </p>
                </Card>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
