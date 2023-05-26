import { FC, ReactElement } from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";

export const EventContactCard: FC = (): ReactElement => {
  return (
    <div className="w-full py-10 mb-6 rounded-md shadow-sm bg-neutral-50 px-7">
      <header className="flex items-center gap-3 mb-10">
        <HiBuildingOffice2 className="text-[30px] text-yellow-500" />

        <p className="text-lg font-thin text-neutral-800">Abdul - Ketua Panitia</p>
      </header>
      <main className="text-sm text-neutral-500">
        <section className="mb-4">
          <p>No. Telepon</p>
          <p className="text-neutral-800">+62 89647298234</p>
        </section>
        <section className="mb-4">
          <p>Alamat Email</p>
          <p className="text-neutral-800">Lionelabdul@gmail.com</p>
        </section>
      </main>
    </div>
  );
};
