import { FC, ReactElement } from "react";
import { LeaderboardEverDone } from "./ever-done";
import { useDashboardData } from "../../hooks";
import { LeaderboardNeverDone } from "./never-done";
import bigTrophyIcon from "../../assets/bigTrophyIcon.svg";

import Image from "next/image";

export const LeaderboardSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();

  return (
    <section className="w-full bg-white mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100">
      <section className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl text-neutral-900 font-bold mb-2">Papan Skor</h1>
          <p className="text-lg text-yellow-500 font-bold ">0</p>
          <p className="text-sm text-yellow-500">Poin Kamu</p>
        </div>
        <Image className="w-20 " src={bigTrophyIcon} alt="papan skor" />
      </section>
      {getDashboardData?.leaderboard !== null ? <LeaderboardEverDone /> : <LeaderboardNeverDone />}
    </section>
  );
};
