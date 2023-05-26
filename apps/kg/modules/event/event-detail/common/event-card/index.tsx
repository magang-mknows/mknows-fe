import { FC, ReactElement } from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { TbCalendarStats } from "react-icons/tb";
import { EventCardProps } from "./types";

export const EventCard: FC<EventCardProps> = ({ isOrder }): ReactElement => {
  return (
    <div className="bg-white shadow-sm rounded-md w-full px-7 py-10 mb-6">
      <header className="flex items-center gap-3 mb-10 text-neutral-800">
        {isOrder ? (
          <HiOutlineTicket className="text-[30px]" />
        ) : (
          <TbCalendarStats className="text-[30px]" />
        )}
        <p className="text-lg font-thin ">{isOrder ? "Pemesanan Tiket" : "Acara"}</p>
      </header>
      <main className="text-neutral-500 text-sm">
        {isOrder ? (
          <>
            <section className="mb-4">
              <p>Tipe Pemesanan Tiket</p>
              <p className="text-neutral-800">Online</p>
            </section>
            <section>
              <p className="mb-2">Batas Pemesanan TIket</p>
              <section className="mb-4">
                <p>Tanggal</p>
                <p className="text-neutral-800">11 Maret 2023</p>
              </section>
              <section className="mb-4">
                <p>Jam</p>
                <p className="text-neutral-800">08.00 WIB</p>
              </section>
            </section>
          </>
        ) : (
          <>
            <section className="mb-4">
              <p>Lokasi Acara</p>
              <p className="text-neutral-800">Online (Zoom)</p>
            </section>
            <section>
              <p className="mb-2">Waktu Mulai Acara</p>
              <section className="mb-4">
                <p>Tanggal</p>
                <p className="text-neutral-800">11 Maret 2023</p>
              </section>
              <section className="mb-4">
                <p>Jam</p>
                <p className="text-neutral-800">08.00 WIB</p>
              </section>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
