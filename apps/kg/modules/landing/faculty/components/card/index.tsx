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
        width={369}
        height={277}
        loading={'lazy'}
        priority={false}
        className="w-auto h-auto"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4">
            {props.tag.map((item, key) => (
              <div
                key={key}
                className="flex p-2 text-primary-600 bg-primary-100 rounded-lg"
              >
                {item}
              </div>
            ))}
            <div className="flex p-2 text-white bg-success-600 rounded-lg">
              {props.sks} SKS
            </div>
          </div>
          <h1 className="text-primary-600 font-[800] text-[20px]">
            {props.title}
          </h1>
        </div>
      </div>
    </section>
  );
};
