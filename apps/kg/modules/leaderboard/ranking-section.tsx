import Image from 'next/image';
import Avatar from '@/assets/leaderboard/avatar.svg';
import React, { FC, ReactElement } from 'react';
import {
  usePopupProfilLeaderboard,
  usePopupGetUser,
  useGetLeaderboard,
} from './hooks';
import PopupProfil from './components/popup-profil';

export const RankingSection: FC = (): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } =
    usePopupProfilLeaderboard();
  const { data } = useGetLeaderboard();
  const getRank = data?.data;
  const { setPopupUser, getPopupUser } = usePopupGetUser();

  return (
    <div className="relative lg:-top-56 md:-top-44 -top-36 ">
      {getRank
        ?.sort((a, b) => {
          return b.averageScore - a.averageScore;
        })
        ?.map((x, y) => {
          console.log(x);
          return (
            y >= 3 && (
              <>
                <div key={y} id={`${y}`}>
                  <div className="flex lg:px-[56px] px-3 mt-[15px] ">
                    <div className="w-full dark:bg-[#222529] bg-white flex justify-between dark:border-b-[#222529] border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
                      <div className="flex items-center gap-[30px] p-2">
                        <h1 className="font-[400] lg:text-[24px] text-[20px]">
                          {x.subjectCount}
                        </h1>
                        <Image
                          src={Avatar}
                          alt="avatar"
                          className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer"
                          onClick={() => {
                            setPopupUser(x);
                            setPopupLeaderboardStatus(true);
                          }}
                        />
                        <h1 className="font-[600] lg:text-[18px] text-[14px]">
                          {x.student_name}
                        </h1>
                      </div>
                      <div className="flex items-center">
                        <h1 className="font-[600] lg:text-[16px] text-[14px] text-[#0B568D]">
                          {x.averageScore} poin
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
