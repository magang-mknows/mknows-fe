import { FC, ReactElement } from "react";

export const DrillSimulationHeader: FC = (): ReactElement => {
  return (
    <section className="pt-20 px-8 md:px-14 lg:px-16 mb-10">
      <div className="text-center">
        <h1 className="text-3xl text-neutral-900 font-bold mb-2">Simulasi, Drill & Assessment</h1>
        <p className="text-neutral-700 text-sm">
          Simulasi, Drill & Assessment meningkatkan kemampuan individu dan membantu mencari bakat
          terbaik untuk posisi yang tepat.
        </p>
      </div>
    </section>
  );
};
