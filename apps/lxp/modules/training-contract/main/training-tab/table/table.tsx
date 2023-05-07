'use client';
import Image from 'next/image';
import { FC, ReactElement, useEffect, useState } from 'react';
import { TsubjectItems } from './types';

export const TrainingContractTable: FC = (): ReactElement => {
  const subjects = [
    {
      id: '9abad3e2-ed12-4968-a3dd-4c759f368620',
      teacher_id: 'fac8531a-11c1-4d59-8634-b073acfe1b30',
      department_id: '597c9a4d-5db2-4686-a53f-2ece479123c2',
      name: 'Jembotos',
      subject_code: 'PK_01',
      degree: 'Degree',
      level: 1,
      indicator: 'indi',
      study_experience: 'studt',
      teaching_materials: 'materials',
      basic_competencies: 'basic',
      tools_needed: 'needed',
      scoring: 'scoring',
      description: 'description',
      thumbnail:
        'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825462/sub_thumbnail_f7b760be-5193-4bd4-aaa6-b57322bdf347.png',
      credit: 3,
      session_total_number: 3,
      slug: 'jembotos',
    },
  ];

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle  scrollbar-hide md:scrollbar-default">
          <div className=" rounded-lg shadow overflow-hidden ">
            <table className="min-w-full  divide-neutral-400 ">
              <thead className="bg-secondary-blue-100/20 border-b-2 border-neutral-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Nama Pelatihan
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Kode Pelatihan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Jumlah Poin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Batch
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Jumlah Pertemuan
                  </th>
                </tr>
              </thead>
              <tbody className=" text-center   text-neutral-800 ">
                {subjects?.map((subject: TsubjectItems, index: number) => {
                  return (
                    <tr className="bg-neutral-100/80" key={index}>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm text-neutral-800 ">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 cursor-pointer  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm text-neutral-800">
                        <section className="flex gap-4 items-center">
                          <figure className="h-16 w-16">
                            <Image
                              src={subject?.thumbnail}
                              alt="offer-view"
                              className=" w-full h-full relative z-20  "
                              height={50}
                              width={50}
                              loading="lazy"
                            />
                          </figure>
                          <section className="flex flex-col items-start justify-start">
                            <h1 className="font-bold text-base text-neutral-800">
                              {subject?.name}
                            </h1>
                            <p className="text-sm font-normal text-neutral-400">
                              18 Karyawan Terdaftar
                            </p>
                          </section>
                        </section>
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                        {subject?.subject_code}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.credit} Poin
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.level}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.session_total_number} Pertemuan
                      </td>
                    </tr>
                  );
                })}

                <tr className="font-bold">
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={2}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">
                    {subjects?.reduce(
                      (prev: number, subject: TsubjectItems) =>
                        prev + subject.credit,
                      0
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
