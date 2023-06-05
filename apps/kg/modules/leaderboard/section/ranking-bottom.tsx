import Image from "next/image";
import Avatar from "../assets/avatar.svg";
import React, { FC, ReactElement } from "react";
import { usePopupProfilLeaderboard, usePopupGetUser, useGetLeaderboard } from "../hooks";
import PopupProfil from "../components/popup-profil";
import { useFaculty } from "../../study-plan/choice-faculty/hooks";

export const RankingSection: FC = (): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } = usePopupProfilLeaderboard();
  const { data: dataLeaderboard } = useGetLeaderboard();
  const getRank = dataLeaderboard?.data;
  const { setPopupUser, getPopupUser } = usePopupGetUser();
  const { data: dataFaculty } = useFaculty();
  console.log("cek faculty", dataFaculty?.data);

  return (
    <div className="relative lg:-top-56 md:-top-44 -top-36 ">
      {getRank
        ?.sort((a, b) => {
          return b.poin - a.poin;
        })
        ?.map((x, index) => {
          console.log(x);
          return (
            index >= 3 && (
              <>
                <div key={index}>
                  <div className="flex lg:px-[56px] px-3 mt-[15px] ">
                    <div className="w-full dark:bg-[#222529] bg-white flex justify-between dark:border-b-[#222529] border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
                      <div className="flex items-center gap-[30px] p-2">
                        <h1 className="font-[400] lg:text-[24px] text-[20px]">{index + 1}</h1>
                        <Image
                          src={x?.author?.avatar === null ? Avatar : x?.author?.avatar}
                          width={30}
                          height={30}
                          alt="avatar"
                          className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer"
                          onClick={() => {
                            setPopupUser(x);
                            setPopupLeaderboardStatus(true);
                          }}
                        />
                        <h1 className="font-[600] lg:text-[18px] text-[14px]">
                          {x?.author?.full_name}
                        </h1>
                      </div>
                      <div className="flex items-center">
                        <h1 className="font-[600] lg:text-[16px] text-[14px] text-[#0B568D]">
                          {x.poin === null ? "0" : x?.poin} Poin
                        </h1>
                      </div>
                    </div>
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
              </>
            )
          );
        })}
    </div>
  );
};
