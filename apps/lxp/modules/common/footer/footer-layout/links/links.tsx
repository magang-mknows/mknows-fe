import { FC, ReactElement } from "react";

export const FooterLinks: FC = (): ReactElement => {
  return (
    <section className="flex gap-20">
      <div className=" text-neutral-900">
        <h1 className=" mb-3 lg:mb-6 font-black text-base">Halaman</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Administrasi
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Semua Fitur
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Rencana Pelatihan
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Panduan
          </li>
        </ul>
      </div>
      <div className=" text-neutral-900">
        <h1 className="mb-3 lg:mb-6 font-black text-base">Kontak</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li>+62 2143 1244</li>
          <li>lmsmknows@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};
