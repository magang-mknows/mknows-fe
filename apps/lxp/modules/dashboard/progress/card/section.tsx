import { FC, ReactElement } from 'react';
import { TProgressCardProps } from './types';
import { Button } from '@mknows-frontend-services/components/atoms';
import { Card } from '@mknows-frontend-services/components/molecules';

export const ProgressCard: FC<TProgressCardProps> = ({
  topic,
  milestone,
  title,
  totalClass,
  classAttended,
  percentage,
}): ReactElement => {
  return (
    <Card hasImage={false}>
      <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between flex-wrap gap-y-4">
        <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
          <figure className="bg-neutral-200 rounded-md w-24 h-24"></figure>
          <section className="flex flex-col">
            <section className="mb-5">
              <h1 className="text-base text-neutral-800 font-bold">{topic}</h1>
              <p className="text-xs md:text-sm text-neutral-500">
                {milestone} | {title}
              </p>
            </section>
            <section className="flex flex-wrap items-center gap-2">
              <div className="w-full bg-neutral-300 rounded-full h-3 ">
                <div
                  className={`bg-secondary-blue-500 h-3 rounded-full`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <h1 className="text-sm text-neutral-400 w-full">
                {`${classAttended}/${totalClass}`} Pertemuan
              </h1>
            </section>
          </section>
        </section>
        <section className="flex items-center">
          {classAttended / totalClass !== 1 ? (
            <Button
              type="button"
              className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-2 w-[200px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
            >
              <h1>Lanjutkan Pelatihan</h1>
            </Button>
          ) : (
            <Button
              type="button"
              disabled
              className="bg-neutral-300 text-neutral-400 py-2.5 disabled:bg-version2-200/70 disabled:border-none  hover:bg-version2-300 hover:border-version2-300 text-sm w-[200px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
            >
              <h1>Lanjutkan Pelatihan</h1>
            </Button>
          )}
        </section>
      </div>
    </Card>
  );
};
