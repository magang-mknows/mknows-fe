import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { TChoiceFacultyCardProps } from './types';

export const ChoiceFacultyCard: FC<TChoiceFacultyCardProps> = (
  props
): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white">
      <Image
        src={props.src}
        alt={'card-landing'}
        width={325}
        height={208}
        loading={'lazy'}
        priority={false}
        className="w-auto h-auto"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-black font-[800] text-[20px]">{props.title}</h1>
        </div>
      </div>
    </section>
  );
};
