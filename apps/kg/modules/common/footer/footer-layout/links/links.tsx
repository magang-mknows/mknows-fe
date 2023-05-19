import { FC, ReactElement } from 'react';

export const FooterLinks: FC = (): ReactElement => {
  return (
    <section className="flex gap-20">
      <div className=" text-neutral-900">
        <h1 className=" mb-3 lg:mb-6 font-black text-base">Halaman</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Beranda
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Fitur
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Mentor
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            Panduan
          </li>
        </ul>
      </div>
      <div className=" text-neutral-900">
        <h1 className="mb-3 lg:mb-6 font-black text-base">Kontak</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li>+622 1720 9729 </li>
          <li>kampusgratis123@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};
