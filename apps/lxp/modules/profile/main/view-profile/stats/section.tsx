import { FC, ReactElement } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BsBuildingsFill, BsClockFill, BsFillChatLeftFill } from "react-icons/bs";
import { TViewProfileStatsProps } from "./types";

export const ViewProfileStats: FC<TViewProfileStatsProps> = ({
  certificateCount,
  likeCount,
  totalDiscussion,
  totalFinalScore,
}): ReactElement => {
  return (
    <main className="w-full pl-2 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className="flex items-center gap-5 bg-[#E9F6FD] rounded-md px-6 py-4 shadow-sm text-[#106FA4] font-bold">
        <AiTwotoneLike className="text-4xl" />
        <section className="flex flex-col gap-1">
          <h1>Jumlah like yang didapat</h1>
          <p>{likeCount}</p>
        </section>
      </section>
      <section className="flex items-center gap-5 bg-[#FEF6D0] rounded-md px-6 py-4 shadow-sm text-[#FAB317] font-bold">
        <BsFillChatLeftFill className="text-4xl" />
        <section className="flex flex-col gap-1">
          <h1>Jumlah Diskusi</h1>
          <p>{totalDiscussion}</p>
        </section>
      </section>
      <section className="flex items-center gap-5 bg-[#E3FBDA] rounded-md px-6 py-4 shadow-sm text-[#3EB449] font-bold">
        <BsClockFill className="text-4xl" />
        <section className="flex flex-col gap-1">
          <h1>IPK</h1>
          <p>{totalFinalScore}</p>
        </section>
      </section>
      <section className="flex items-center gap-5 bg-[#FEDBD7] rounded-md px-6 py-4 shadow-sm text-[#ED3768] font-bold">
        <BsBuildingsFill className="text-4xl" />
        <section className="flex flex-col gap-1">
          <h1>Sertifikat</h1>
          <p>{certificateCount}</p>
        </section>
      </section>
    </main>
  );
};
