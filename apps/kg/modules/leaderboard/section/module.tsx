import React, { ReactElement } from "react";
import { Filter } from "./filter";
import { usePopupProfilLeaderboard, usePopupGetUser } from "../hooks";
import PopupProfil from "../components/popup-profil";
import { Pagination } from "@mknows-frontend-services/components/molecules";
import { RankingSection } from "./ranking-bottom";
import { StepRanking } from "./ranking-up";

export const ContentSection = (): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } = usePopupProfilLeaderboard();
  const { getPopupUser } = usePopupGetUser();
  return (
    <div className="mt-[71px] w-full lg:px-[130px] md:px-[100px] px-3  mb-10 dark:bg-[#222529]">
      <h1 className="text-center dark:text-white text-black text-28px font-[700] rounded-[8px]">
        Papan Skor
      </h1>
      <div className="card bg-white dark:bg-[#1B1E21] mt-[39px] w-full rounded-[8px] py-10 ">
        <div className="flex justify-between md:px-10 px-5">
          <Filter />
          <Filter />
        </div>
        <StepRanking />
        <RankingSection />
        <div className="flex justify-center mt-0 ">
          <Pagination />
        </div>
      </div>
      <PopupProfil
        onClose={() => {
          setPopupLeaderboardStatus(false);
        }}
        lookup={getPopupLeaderboardStatus}
        widthModal="!max-w-[748px]"
        {...getPopupUser}
      />
    </div>
  );
};
