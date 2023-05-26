import { FC, ReactElement } from "react";

import { ViewProfileHero } from "./hero";
import { ViewProfilInfo } from "./info";
import { ViewProfileStats } from "./stats";

export const ViewProfileSection: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-neutral-800">View Profile</h1>
      </header>
      <ViewProfileHero />
      <ViewProfilInfo />
      <ViewProfileStats />
    </main>
  );
};
