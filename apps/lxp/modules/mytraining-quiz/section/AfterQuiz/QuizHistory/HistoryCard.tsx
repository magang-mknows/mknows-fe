import { FC, ReactElement } from "react";
import DetailCard from "../QuizScore/DetailCard";

const HistoryCard: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50 shadow-sm rounded-md px-5 py-4 w-full">
      <section className="flex justify-between text-sm">
        <div className="flex flex-col md:flex-row md:gap-x-1 font-bold">
          <h1>Percobaan</h1>
          <p>Pertama</p>
        </div>
        <div>
          <p className="mb-1">20 Febuari 2023</p>
          <p className="lg:text-end">11:40:56</p>
        </div>
      </section>
      <section className="lg:flex lg:gap-x-2 my-6">
        <div className="flex flex-col w-full dark:border-none lg:w-28 py-9 mb-2 lg:mb-0  border-2 border-[#F5F5F5]  items-center justify-center rounded-md min-w-[140px] ">
          <h1 className="text-3xl font-bold">90</h1>
          <p>Lulus</p>
        </div>
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2  w-full">
          <DetailCard type="trueAnswer" value="9" />
          <DetailCard type="timeFinished" value="9 Bulan 10 Hari" />
          <DetailCard type="falseAnswer" value="1" />
          <DetailCard type="totalQuestions" value="10" />
        </div>
      </section>
    </section>
  );
};

export default HistoryCard;
