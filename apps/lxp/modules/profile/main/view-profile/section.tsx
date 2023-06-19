import { FC, ReactElement } from "react";

import { ViewProfileHero } from "./hero";
import { ViewProfilInfo } from "./info";
import { ViewProfileStats } from "./stats";
import { IViewProfileProps } from "./types";

export const ViewProfileSection: FC<IViewProfileProps> = ({
  avatar,
  full_name,
  user_administration,
  batch,
  certificateCount,
  likeCount,
  totalFinalScore,
  totalDiscussion,
}): ReactElement => {
  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-neutral-800">View Profile</h1>
      </header>
      <ViewProfileHero avatar={avatar} full_name={full_name} />
      <ViewProfilInfo
        full_name={full_name}
        user_administration={user_administration}
        batch={batch}
      />
      <ViewProfileStats
        certificateCount={certificateCount}
        likeCount={likeCount}
        totalDiscussion={totalFinalScore}
        totalFinalScore={totalDiscussion}
      />
    </main>
  );
};
