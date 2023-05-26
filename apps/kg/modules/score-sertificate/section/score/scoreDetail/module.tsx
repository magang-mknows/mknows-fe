import { FC, ReactElement } from "react";
import { ScoreDetailTable } from "./scoreDetailTable/scoreDetailTable";

export const ScoreDetail: FC = (): ReactElement => {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <section className="flex gap-x-2 items-center mb-4">
          <div className="h-2 w-2 rounded bg-yellow-500"></div>
          <h1>Semester 1</h1>
        </section>
        <ScoreDetailTable />
      </div>
      <div className="mb-6">
        <section className="flex gap-x-2 items-center mb-4">
          <div className="h-2 w-2 rounded bg-yellow-500"></div>
          <h1>Semester 2</h1>
        </section>
        <ScoreDetailTable />
      </div>
    </div>
  );
};
