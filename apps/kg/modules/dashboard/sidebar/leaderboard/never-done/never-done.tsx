import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";
import emptyLeaderBoard from "../../../assets/emptyLeaderBoard.svg";

export const LeaderboardNeverDone: FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="mb-8  mt-20">
        <Image src={emptyLeaderBoard} alt="leaderBoard" className="h-52" />
        <p className="text-center text-neutral-900 text-sm my-3 px-10 lg:px-20">
          Opps.. Kamu <span className="font-bold underline">belum pernah</span> mengerjakan tugas
        </p>
      </section>
    </Fragment>
  );
};
