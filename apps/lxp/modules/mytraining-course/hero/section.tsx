import Image from "next/image";
import { FC, ReactElement } from "react";
import { useGetMyWorkCourse } from "../hooks";
import { useRouter } from "next/router";

export const HeroSection: FC = (): ReactElement => {
  const { query } = useRouter();
  const { data } = useGetMyWorkCourse(
    query.subjectID as string,
    query.lastSession as string,
    query.batchID as string,
  );
  console.log("tes", data?.dataSubject?.name);
  return (
    <div className="items-center mx-8 md:mx-14 lg:mx-16 bg-neutral-50 rounded-lg px-8 md:px-14 py-6 ">
      <h3 className="text-neutral-800  lg:text-[25px] text-[20px] text-center font-bold pt-[13px] pb-5">
        {data?.data?.dataSubject?.name}
      </h3>
      <div className="w-full h-[253px]">
        <Image
          src={data?.data?.dataSubject?.thumbnail}
          alt=""
          className="h-full object-cover rounded-lg mx-auto w-auto"
          width={100}
          height={100}
        />
      </div>
      <p className="text-sm font-normal text-neutral-800 text-justify py-10 ">
        {data?.data?.dataSubject?.description}
      </p>
    </div>
  );
};
