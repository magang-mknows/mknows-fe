import { Button } from "@mknows-frontend-services/components/atoms";
import { FC, Fragment, ReactElement } from "react";
import { useDashboardData } from "../../../hooks";
import Image from "next/image";
import medal1Icon from "../../../assets/medal1Icon.svg";
import medal2Icon from "../../../assets/medal2Icon.svg";
import medal3Icon from "../../../assets/medal3Icon.svg";

export const LeaderboardEverDone: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const leaderBoards = getDashboardData?.leaderboard;

  return (
    <Fragment>
      <section className="mb-6 ">
        {leaderBoards?.map((leaderBoard, index) => (
          <div
            key={index}
            className="flex bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 cursor-pointer gap-2 items-center border-t-2 border-neutral-200 border-dashed pt-4 pb-3"
          >
            {index === 0 ? (
              <Image className="w-9" src={medal1Icon} alt="firstplace" />
            ) : index === 1 ? (
              <Image className="w-9" src={medal2Icon} alt="secondPlace" />
            ) : index === 2 ? (
              <Image className="w-9" src={medal3Icon} alt="thirdPlace" />
            ) : (
              <p className="w-9 text-center text-xl">{index + 1}</p>
            )}
            <div>
              <h1 className="text-neutral-900 font-bold text-sm">{leaderBoard.author.user_name}</h1>
              <p className="text-primary-600 text-xs">{leaderBoard.author.poin} Poin</p>
            </div>
          </div>
        ))}
      </section>
      <Button
        type="button"
        className="border-2 border-yellow-500 w-full flex items-center justify-center text-sm text-yellow-500 py-2 rounded-md shadow-sm cursor-pointer bg-white hover:bg-yellow-100 hover:text-yellow-600 hover:border-yellow-500 transition-all ease-in-out duration-300 hover:shadow-md"
      >
        Lihat Semua
      </Button>
    </Fragment>
  );
};
