import { FC, ReactElement } from 'react';
import Image from 'next/image';
import bigTrophyIcon from '../../assets/bigTrophyIcon.svg';
import medal1Icon from '../../assets/medal1Icon.svg';
import medal2Icon from '../../assets/medal2Icon.svg';
import medal3Icon from '../../assets/medal3Icon.svg';
import emptyLeaderBoard from '../../assets/emptyLeaderBoard.svg';

import { dummyRankList } from './store';

export const LeaderboardSection: FC = (): ReactElement => {
  return (
    <section className="w-full bg-white mb-10 px-8 py-7 rounded-md  shadow-md shadow-neutral-100">
      <section className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl text-neutral-900 font-bold mb-2">
            Papan Skor
          </h1>
          <p className="text-lg text-yellow-500 font-bold ">0</p>
          <p className="text-sm text-yellow-500">Poin Kamu</p>
        </div>
        <Image className="w-20 " src={bigTrophyIcon} alt="papan skor" />
      </section>
      <section className="mb-8  mt-20">
        <Image src={emptyLeaderBoard} alt="leaderBoard" className="h-52" />
        <p className="text-center text-neutral-900 text-sm my-3 px-10 lg:px-20">
          Opps.. Kamu <span className="font-bold underline">belum pernah</span>{' '}
          mengerjakan tugas
        </p>
      </section>
      {/* <section className="mb-6 ">
        {dummyRankList.map(({ name, score }, index) => {
          return (
            <div
              key={index}
              className="flex bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 cursor-pointer gap-2 items-center border-t-2 border-dashed pt-4 pb-3"
            >
              {index === 0 ? (
                <Image className="w-9 " src={medal1Icon} alt="firstplace" />
              ) : index === 1 ? (
                <Image className="w-9 " src={medal2Icon} alt="secondPlace" />
              ) : index === 2 ? (
                <Image className="w-9 " src={medal3Icon} alt="thirdPlace" />
              ) : (
                <p className="w-9 text-center text-xl">{index + 1}</p>
              )}
              <div>
                <h1 className="text-neutral-900 font-bold text-sm">{name}</h1>
                <p className="text-primary-600 text-xs">{score} Poin</p>
              </div>
            </div>
          );
        })}
      </section> 
      <Button
        text={"Lihat Semua"}
        type="button"
        className="border-2 border-yellow-500 w-full flex items-center justify-center text-sm text-yellow-500 py-2 rounded-md shadow-sm cursor-pointer bg-white hover:bg-yellow-100 hover:text-yellow-600 hover:border-yellow-500 transition-all ease-in-out duration-300 hover:shadow-md"
      />*/}
    </section>
  );
};
