import { FC, ReactElement } from 'react';
import { BigThropyIcon, BronzeMedal, GoldMedal, SilverMedal } from './assets';

export const LeaderBoardSection: FC = (): ReactElement => {
  const dummyRankList = [
    {
      name: 'Ahmad Baharudin',
      score: 7000,
    },
    {
      name: 'Siti Amelia',
      score: 6740,
    },
    {
      name: 'Kisana Hajar',
      score: 5600,
    },
    {
      name: 'Jhom Bang',
      score: 4050,
    },
    {
      name: 'Sumaryo',
      score: 800,
    },
  ];

  return (
    <section className="w-full bg-neutral-50  mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100 ">
      {/* <section className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl text-neutral-800 font-bold mb-2">Papan Skor</h1>
          <p className="text-lg text-secondary-blue-500 font-bold ">0</p>
          <p className="text-sm text-secondary-blue-500">Poin Kamu</p>
        </div>
        <Image
          className="w-20"
          width={80}
          height={80}
          src={"/assets/dashboard/bigTrophyIcon.svg"}
          alt="papan skor"
        />
      </section>
      <section className="mb-8 flex flex-col items-center  mt-20">
        <Image
          src={"/assets/dashboard/emptyLeaderBoard.svg"}
          alt="leaderBoard"
          className="h-52"
          width={300}
          height={80}
        />
        <p className="text-center text-neutral-800 text-sm my-3 px-10 lg:px-20">
          Opps.. Kamu <span className="font-bold underline">belum pernah</span> mengerjakan tugas
        </p>
      </section> */}
      <section className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-xl text-neutral-800 font-bold mb-2">
            Papan Skor
          </h1>
          <p className="text-lg text-secondary-blue-500 font-bold ">0</p>
          <p className="text-sm text-secondary-blue-500">Poin Kamu</p>
        </div>
        <BigThropyIcon />
      </section>
      <section className="mb-6 ">
        {dummyRankList.map(({ name, score }, index) => {
          return (
            <div
              key={index}
              className="flex bg-neutral-50 hover:bg-neutral-100 transition-colors ease-in-out duration-300 cursor-pointer gap-2 border-t-neutral-300 items-center border-t-2 border-dashed pt-4 pb-3"
            >
              {index === 0 ? (
                <GoldMedal />
              ) : index === 1 ? (
                <SilverMedal />
              ) : index === 2 ? (
                <BronzeMedal />
              ) : (
                <p className="w-9 text-center text-xl">{index + 1}</p>
              )}
              <div>
                <h1 className="text-neutral-800 font-bold text-sm">{name}</h1>
                <p className="text-secondary-blue-500 text-xs">{score} Poin</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
