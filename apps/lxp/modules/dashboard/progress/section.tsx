import { FC, Fragment, useState } from "react";

import { VscTriangleUp } from "react-icons/vsc";
import { ProgressCard } from "./card";
import { TProgressProps } from "./types";

import emptyProgress from "./assets/empty-progress.svg";
import Image from "next/image";
import { Button } from "@mknows-frontend-services/components/atoms";

export const ProgressSection: FC<TProgressProps> = ({ items }) => {
  const [isViewMore, setViewMore] = useState<boolean>(false);
  return (
    <section className="bg-neutral-50 min-h-[76vh] w-full px-6 py-4 rounded-md mb-10">
      {items?.length !== 0 ? (
        <section className="w-full h-full flex flex-col gap-y-2 items-center justify-center">
          <figure className="h-[280px] mb-4">
            <Image
              src={emptyProgress}
              priority
              height={60}
              width={60}
              className="w-full h-full"
              alt="empty-progress"
            />
          </figure>
          <h1 className="text-sm mb-1">Kamu belum mengambil pelatihan pada batch ini</h1>
          <Button
            type="button"
            href="/rencana-pelatihan"
            className="text-neutral-50 px-8 py-2.5 hover:bg-version2-500 rounded-md shadow-sm text-sm bg-version3-500 transition-all ease-in-out duration-100 cursor-pointer"
          >
            <h1>Ambil Pelatihan</h1>
          </Button>
        </section>
      ) : (
        <Fragment>
          <h1 className="font-semibold text-lg  mb-1 text-neutral-900">Lanjutkan Pelatihan Kamu</h1>
          <p className="text-neutral-400 text-xs mb-6">Batch I</p>
          <section>
            {items?.slice(0, !isViewMore ? 3 : 10)?.map((item, index) => (
              <ProgressCard {...item} key={index} />
            ))}
          </section>

          {(items?.length as number) >= 3 ? (
            <section className="w-full text-neutral-500 gap-2 py-4 justify-center flex-col flex items-center">
              <h1 className="text-sm">{!isViewMore ? "Lihat Semua" : "Ke Halaman Penugasan"}</h1>
              <VscTriangleUp
                className={`${isViewMore ? "rotate-0" : "rotate-180"} text-lg cursor-pointer`}
                onClick={() => {
                  setViewMore(!isViewMore);
                }}
              />
            </section>
          ) : null}
        </Fragment>
      )}
    </section>
  );
};
