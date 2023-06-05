import { FC, ReactElement } from "react";
import Image from "next/image";
import { SessionSection } from "./session";
import { useGetSubjectDetailsById } from "./hooks";
import { useRouter } from "next/router";
import { TDataSession } from "./type";

export const SubjectDetailsModule: FC = (): ReactElement => {
  const { query } = useRouter();
  const { data } = useGetSubjectDetailsById(query["detail-matkul"] as string);

  const dataSubjectDetails = data?.data.dataSubject;
  const dataSessions = data?.data.dataSessions;

  const thumbnailImg = dataSubjectDetails?.thumbnail.includes(".")
    ? dataSubjectDetails.thumbnail
    : "";

  return (
    <div className="mx-auto px-[7%] my-8 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-[30px] items-center">
        <h3 className="text-black text-[28px] text-center font-bold">{dataSubjectDetails?.name}</h3>
        <div className="w-[95%] h-[253px]">
          <Image
            src={thumbnailImg}
            alt={`${dataSubjectDetails?.name}-image`}
            width={1170}
            height={250}
            className="h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <p className="text-lg font-normal text-neutral-800 text-justify">
          {dataSubjectDetails?.description}
        </p>
      </div>

      <div className="flex flex-col gap-[25px] select-none">
        {dataSessions?.map((session, index) => (
          <SessionSection key={index} index={index} session={session as TDataSession} />
        ))}
      </div>
    </div>
  );
};
