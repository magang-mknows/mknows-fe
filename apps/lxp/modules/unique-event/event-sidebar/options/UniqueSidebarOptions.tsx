import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

export const UniqueSidebarOptions: FC = (): ReactElement => {
  const { query } = useRouter();

  return (
    <section className="px-3 py-2 rounded-md shadow-sm bg-neutral-50">
      <Link href={"/event-pelatihan?tab=daftar"}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer ${
            query?.tab === "daftar"
              ? "bg-version2-400 text-neutral-50"
              : " bg-neutral-50 text-neutral-800"
          }
               transition-all ease-linear duration-75 `}
        >
          Daftar Event
        </h1>
      </Link>
      <Link href={"/event-pelatihan?tab=terdaftar"}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer ${
            query?.tab === "terdaftar"
              ? "bg-version2-400 text-neutral-50"
              : " bg-neutral-50 text-neutral-800"
          }
               transition-all ease-linear duration-75 `}
        >
          Event Terdaftar
        </h1>
      </Link>
      <Link href={"/event-pelatihan?tab=riwayat"}>
        <h1
          className={`px-3 py-3 text-sm  rounded-md cursor-pointer ${
            query?.tab === "riwayat"
              ? "bg-version2-400 text-neutral-50"
              : " bg-neutral-50 text-neutral-800"
          }
               transition-all ease-linear duration-75 `}
        >
          Riwayat Event
        </h1>
      </Link>
    </section>
  );
};
