import { FC, ReactElement } from 'react';
import Image from 'next/image';
import imgCourseHome from './assets/course-home-1.svg';
import { SessionSection } from './session';
import { useGetSubjectDetailsById } from './hooks';
import { useRouter } from 'next/router';
import { TDataSession } from './type';

export const SubjectDetailsModule: FC = (): ReactElement => {
  const { query } = useRouter();
  const { data } = useGetSubjectDetailsById(query['detail-matkul'] as string);

  const dataSubjectDetails = data?.data.dataSubject;
  const dataSessions = data?.data.dataSessions;

  // const dataSessions = [
  //   {
  //     id: '6bc3b730-8c7d-41f0-a1dc-03bac621a824',
  //     session_no: 1,
  //     is_locked: false,
  //     progress: [
  //       {
  //         status: 'FINISHED',
  //         type: 'MODULE',
  //         updated_at: '2023-05-10T22:44:53.666Z',
  //       },
  //       {
  //         status: 'FINISHED',
  //         type: 'QUIZ',
  //         updated_at: '2023-05-10T22:45:01.729Z',
  //       },
  //       {
  //         status: 'FINISHED',
  //         type: 'ASSIGNMENT',
  //         updated_at: '2023-05-10T22:45:07.528Z',
  //       },
  //     ],
  //   },
  //   {
  //     id: '6bc3b730-8c7d-41f0-a1dc-03bac621a825',
  //     session_no: 2,
  //     is_locked: true,
  //     progress: [],
  //   },
  // ];
  // console.log('subject-details response : ', data?.data);

  return (
    <div className="mx-auto px-[7%] my-8 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-[30px] items-center">
        <h3 className="text-black text-[28px] text-center font-bold">
          {dataSubjectDetails?.name}
        </h3>
        <div className="w-[95%] h-[253px]">
          <Image
            src={imgCourseHome}
            alt={`${dataSubjectDetails?.name}-image`}
            className="h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <p className="text-lg font-normal text-neutral-800 text-justify">
          {dataSubjectDetails?.description}
        </p>
      </div>

      <div className="flex flex-col gap-[25px] select-none">
        {dataSessions?.map((session, i) => (
          <SessionSection session={session as TDataSession} />
        ))}
      </div>
    </div>
  );
};
