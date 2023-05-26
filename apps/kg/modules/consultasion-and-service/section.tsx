import { FC, ReactElement } from "react";

export const ConsultationAndServiceModule: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-100 w-full h-screen">
      <div className="flex flex-col bg-primary-500 h-[244px] mx-[72px] rounded-md justify-center items-center text-white gap-[14px]">
        <h1 className="font-bold text-[36px]">Konsultasi & Layanan</h1>
        <p className="text-[28px]">Apa yang bisa kami bantu untuk Anda?</p>
      </div>
    </main>
  );
};
