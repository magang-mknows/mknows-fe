import { FC, ReactElement } from 'react';
import Image from 'next/image';

import { useOptionFaculty } from '../hooks';
import Card from '../components/Card';

import ImgChoiceFaculty from '../assets/choicefaculty2.svg';
import DefaultView from '../assets/data-kosong.png';
import { useFaculty } from './hooks';

export const ChoiceFaculty: FC = (): ReactElement => {
  const { getOptionFaculty } = useOptionFaculty();
  const { data } = useFaculty();
  const facultyData = data?.data;
  console.log(facultyData);

  return (
    <div className="px-8">
      <h5 className="p-0 text-2xl font-semibold lg:p-2">Pilihan Fakultas</h5>
      <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-3">
        <>
          {facultyData?.length === 0 ? (
            <div className="flex flex-col justify-center w-screen h-screen gap-8 lg:items-center ">
              <div className="hidden w-auto h-auto p-1 bg-gray-100 rounded-full lg:flex dark:bg-gray-600 lg:p-4">
                <Image src={DefaultView} alt="simulasi-null" />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Fakultas</h1>
            </div>
          ) : (
            <>
              {facultyData?.map((x, i) => (
                <Card
                  key={i}
                  href={`/rencana-studi/fakultas/${x.id}`}
                  className="px-3 rounded-lg "
                  imgStyle="rounded-lg"
                  hasImage={true}
                  src={ImgChoiceFaculty}
                  titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                  icon={
                    <div className="flex flex-row px-2 space-x-1">
                      <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                        {x.majors_count} Program Study
                      </div>
                    </div>
                  }
                >
                  <div className="text-xl mt-0 text-[#106FA4] w-full">
                    {x.name}
                  </div>
                </Card>
              ))}
              {/* {getOptionFaculty.map((x, i) => (
                <Card
                  key={i}
                  href={'/rencana-studi/fakultas' + x.slug}
                  className="px-3 rounded-lg "
                  imgStyle="rounded-lg"
                  hasImage={true}
                  src={x.src}
                  titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                  icon={
                    <div className="flex flex-row px-2 space-x-1">
                      <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                        {x.jumlahstudi} Program Study
                      </div>
                    </div>
                  }
                >
                  <div className="text-xl mt-0 text-[#106FA4] w-full">
                    {x.deskripsi}
                  </div>
                </Card>
              ))} */}
            </>
          )}
        </>
      </div>
    </div>
  );
};

// export default ChoiceFaculty;
