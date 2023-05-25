import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { dummySceduleSimulation } from "./store";
import { Card } from "@mknows-frontend-services/components/molecules";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mknows-frontend-services/components/atoms";

export const RequestSimulation: FC = (): ReactElement => {
  const getdummyData = useRecoilValue(dummySceduleSimulation);

  return (
    <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {getdummyData.map((item, index) => {
        return (
          <Card hasImage={false} key={index}>
            <section className="w-full bg-neutral-50 hover:shadow-md hover:bg-neutral-100 transition-all ease-in-out duration-300 rounded-md overflow-hidden shadow-sm">
              <Image
                src={
                  "https://res.cloudinary.com/dvsqy8n1a/image/upload/v1683630131/sub_thumbnail_eff70dfe-3df7-497f-ab45-2901975024ad.png"
                }
                alt="dummy-view"
                width={100}
                height={100}
                className="w-full max-h-[260px]"
              />
              <main className="px-4 py-4">
                <section className="flex mb-2 gap-3 ">
                  <span className="w-fit px-2 py-0.5 rounded-md shadow-sm text-xs text-neutral-50 bg-version2-400">
                    {item?.lecture}
                  </span>
                  {item?.schedule.length != 0 && (
                    <span className="w-fit px-2 py-0.5 rounded-md shadow-sm text-xs text-neutral-50 bg-version3-500">
                      {item?.schedule.length} Jadwal Tersedia
                    </span>
                  )}
                </section>
                <h1 className="font-bold text-base mb-2">{item?.title}</h1>
                <Link
                  href={`drill-simulasi/pengajuan-jadwal/${item?.title}`}
                  passHref
                  className="w-full flex justify-start xl:justify-end"
                >
                  <Button
                    type="button"
                    className={`${
                      item?.schedule.length === 0 &&
                      "!bg-neutral-300 !text-neutral-400 !border-none !text-xs"
                    } font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 w-[200px] disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300`}
                  >
                    <h1>
                      {item.schedule.length !== 0
                        ? "Lihat Jadwal Simulasi"
                        : "Tidak Ada Jadwal Tersedia"}
                    </h1>
                  </Button>
                </Link>
              </main>
            </section>
          </Card>
        );
      })}
    </header>
  );
};
