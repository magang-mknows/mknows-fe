import { FC, ReactElement } from "react";
import Image from "next/image";
import { constMajorValue } from "./const";
import { TDataMajor } from "../types";

export const MajorSection: FC<TDataMajor> = (dataMajorProps): ReactElement => {
  const {
    student_count,
    subject_count,
    credit_count,
    current_semester,
    description,
    head_of_major,
    name,
    thumbnail,
  } = dataMajorProps;

  const majorDetailsAmount = [student_count, subject_count, credit_count, current_semester];

  return (
    <div className="flex md:flex-row flex-col w-full sm:w-[85%] mx-auto py-8 bg-white">
      <div className="min-w-[240px] min-h-[240px] mx-auto lg:mx-0">
        <Image
          src={thumbnail}
          alt={"thumbnail-images"}
          width={240}
          height={240}
          className="w-full"
        />
      </div>
      <div className="px-4 py-6 md:py-0 w-full flex flex-col gap-y-6 sm:gap-y-6 lg:justify-between">
        <div className="mx-auto md:mx-0">
          <h2 className="text-sm font-medium">Program Studi</h2>
          <h1 className="text-[28px] leading-9 font-bold my-1">{name || "unknown"}</h1>
          <p className="text-lg">{head_of_major || "unknown"}</p>
          <p className="text-neutral-600 text-sm my-2">{description || "unknown"}</p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 rounded-lg gap-y-4">
          {constMajorValue.map((x, i) => {
            return (
              <div
                key={i}
                style={{ background: x.warna }}
                className="flex py-3 px-5 justify-center rounded-lg items-center"
              >
                <div className="flex min-w-[120px] md:min-w-fit">
                  <Image src={x.icon} alt={`${x.detail}-icon`} className="mr-3" />
                  <div className="flex flex-col text-neutral-800">
                    <p className="font-semibold text-base">{majorDetailsAmount[i] || "-"}</p>
                    <p className="text-sm font-medium">{x.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
