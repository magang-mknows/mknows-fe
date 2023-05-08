import { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useRecoilState, useRecoilValue } from 'recoil';
import { filterOptionSubject, queryOptionSubject } from '../stores';
import Card from '../components/Card';

import DefaultView from '../assets/data-kosong.png';
import Search from '../assets/search.svg';

const StudyProgram: FC = (): ReactElement => {
  const { query: q } = useRouter();
  const getOptionSubject = useRecoilValue(
    filterOptionSubject(q.slug as unknown as string)
  );
  const [query, setQuery] = useRecoilState(queryOptionSubject);
  const [isClose, setClose] = useState(false);
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="bg-gray-200 dark:bg-gray-300 dark:text-white  w-full h-[56px] mt-10 mb-10 rounded-[8px]">
          <div className="flex py-4 ml-5">
            <Image src={Search} alt={'search'} width={28} />
            <input
              type={'text'}
              value={query}
              className="w-full bg-transparent focus:outline-none"
              placeholder="Cari Mata Kuliah"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="px-10">
        <div
          className={`${
            isClose && 'hidden'
          } flex bg-yellow-100 dark:bg-yellow-300 border border-yellow-400 dark:border-yellow-100 dark:text-whitetext-yellow-700 py-3 rounded relative px-6`}
          role="alert"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.30931 0.635506C6.25594 0.669123 4.29827 1.50947 2.85951 2.97489C1.40495 4.42305 0.602043 6.4006 0.635399 8.45287C0.633013 10.4574 1.42854 12.3804 2.84635 13.7973C4.26416 15.2143 6.18763 16.0087 8.19212 16.0051H8.32916C12.6059 15.9611 16.0398 12.4633 16.005 8.18646C16.0098 6.15713 15.1958 4.21166 13.7473 2.79039C12.2988 1.36912 10.3382 0.59221 8.30931 0.635506ZM7.3596 11.229C7.35027 10.9753 7.44336 10.7286 7.61789 10.5443C7.79243 10.36 8.03375 10.2537 8.28754 10.2492H8.30483C8.82997 10.2502 9.26056 10.6658 9.28016 11.1906C9.28966 11.4443 9.19664 11.6911 9.02206 11.8755C8.84749 12.0598 8.60606 12.1661 8.35222 12.1704H8.33493C7.81005 12.1687 7.37985 11.7535 7.3596 11.229ZM7.6798 4.79811V8.64051C7.6798 8.99419 7.96652 9.28091 8.3202 9.28091C8.67388 9.28091 8.9606 8.99419 8.9606 8.64051V4.79811C8.9606 4.44442 8.67388 4.15771 8.3202 4.15771C7.96652 4.15771 7.6798 4.44442 7.6798 4.79811Z"
              fill="#F9B400"
            />
          </svg>

          <span className="block px-4 sm:inline">
            Kamu hanya bisa mengambil satu(1) program studi
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setClose(true)}
              className="w-6 h-6 text-gray-500 fill-current"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-4">
          <>
            {getOptionSubject.length === 0 ? (
              <div className="flex flex-col justify-center w-screen h-screen gap-8 lg:items-center ">
                <div className="hidden w-auto h-auto p-1 bg-gray-100 rounded-full lg:flex dark:bg-gray-600 lg:p-4">
                  <Image src={DefaultView} alt="simulasi-null" />
                </div>
                <h1 className="text-xl font-bold">
                  Tidak Ada Data Program Studi
                </h1>
              </div>
            ) : (
              <>
                {getOptionSubject.map((x, i) => (
                  <Card
                    href={'/kontrak-krs'}
                    key={i}
                    className="px-3 rounded-lg "
                    hasImage={true}
                    imgStyle="rounded-lg"
                    src={x.src}
                    titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                    icon={
                      <div className="flex flex-row gap-2 px-4 space-x-1">
                        <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                          {x.jumlahmatkul} Mata Kuliah
                        </div>
                        <div className="lg:h-[22px] text-[#ED3768] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#FEDBD7]">
                          {x.sks} SKS
                        </div>
                      </div>
                    }
                  >
                    <div className="text-xl mt-0 text-[#106FA4] w-full">
                      {x.deskripsi}
                    </div>
                  </Card>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default StudyProgram;
