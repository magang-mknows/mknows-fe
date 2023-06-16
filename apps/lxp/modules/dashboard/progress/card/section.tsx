import { FC, ReactElement } from "react";
import { Button } from "@mknows-frontend-services/components/atoms";
import { Card } from "@mknows-frontend-services/components/molecules";

import dummyProgressImage from "./dummy-assets/dummy-progress.svg";
import Image from "next/image";
import { TDataMyWorkItem } from "../../types";

export const ProgressCard: FC<TDataMyWorkItem> = (props): ReactElement => {
  return (
    <Card hasImage={false}>
      <div className="border-[1px] border-neutral-200 rounded-md shadow-sm px-4 py-4 flex justify-between flex-wrap gap-y-4">
        <section className=" flex gap-y-2 gap-x-6 items-center flex-wrap">
          <figure className="bg-neutral-200 rounded-md w-24 h-24">
            <Image
              src={props?.thumbnail || dummyProgressImage}
              alt="test"
              height={90}
              width={100}
              className="w-full h-full"
              priority
            />
          </figure>
          <section className="flex flex-col">
            <section className="mb-5">
              <h1 className="text-base text-neutral-800 font-bold">{props?.name}</h1>
              <p className="text-xs md:text-sm text-neutral-500">
                Bacth I | {props?.department_name}
              </p>
            </section>
            <section className="flex flex-wrap items-center gap-2">
              <div className="w-full bg-neutral-300 rounded-full h-3 ">
                <div
                  className={`bg-secondary-blue-500 h-3 rounded-full`}
                  style={{ width: `${props?.progress}%` }}
                ></div>
              </div>
              <h1 className="text-sm text-neutral-400 w-full">
                {`${props?.last_session}/${props?.session_total_number}`} Pertemuan
              </h1>
            </section>
          </section>
        </section>
        <section className="flex items-center">
          {props?.progress !== 100 ? (
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
              className="bg-neutral-200 text-neutral-400 py-2.5 disabled:bg-version2-200/70 disabled:border-none cursor-default text-sm w-[200px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2  flex items-center justify-center gap-2"
            >
              <h1>Lanjutkan Pelatihan</h1>
            </Button>
          )}
        </section>
      </div>
    </Card>
  );
};
