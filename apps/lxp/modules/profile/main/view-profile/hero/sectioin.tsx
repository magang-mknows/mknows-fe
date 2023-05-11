import { FC, ReactElement } from 'react';

export const ViewProfileHero: FC = (): ReactElement => {
  return (
    <section className="relative w-full">
      <figure className="w-full min-h-[260px] bg-neutral-200 rounded-md shadow-sm"></figure>
      <figure className="w-[120px] h-[120px] rounded-full bg-neutral-300 border-4 border-neutral-50 absolute -bottom-12 left-0"></figure>
    </section>
  );
};
