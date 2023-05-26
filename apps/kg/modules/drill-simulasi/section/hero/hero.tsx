import { FC, ReactElement } from "react";
import Image from "next/image";
import Search from "../../assets/search.svg";
import { useRecoilState } from "recoil";
import { queryScheduleSimulation } from "./store";

export const HeroSection: FC = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryScheduleSimulation);
  return (
    <div className=" py-10 ">
      <div className="text-center">
        <h1 className="text-[28px] font-[700]">Simulasi, Drill & Assessment</h1>
        <h3 className="text-[16px] font-[600] text-[#A3A3A3] mt-5">
          Simulasi, Drill & Assessment meningkatkan kemampuan individu dan membantu mencari bakat
          terbaik untuk posisi yang tepat.
        </h3>
      </div>

      <div className="lg:px-16 md:px-10">
        <div className="bg-[#F5F5F5] dark:bg-[#222529] h-[56px] mt-10 mb-10 rounded-[8px] text-black">
          <div className="flex ml-5 py-4 ">
            <Image src={Search} alt={"search"} width={28} />
            <input
              type={"text"}
              value={query}
              className="bg-transparent w-full focus:outline-none bg-[#F5F5F5]"
              placeholder="Cari Simulasi"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
