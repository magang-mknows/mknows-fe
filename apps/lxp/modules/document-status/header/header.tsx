import { FC, ReactElement } from "react";
import { FaCheck, FaStar, FaTimes } from "react-icons/fa";

export const DocumentStatusHeader: FC = (): ReactElement => {
  return (
    <section className="pb-6 py-10 relative px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
      <div className="absolute left-20 hidden lg:block">
        <FaTimes className="text-secondary-blue-400 text-xl lg:text-4xl relative left-11 rotate-12" />
        <FaStar className="text-secondary-blue-600 text-xl lg:text-4xl relative -rotate-12 -bottom-14" />
        <FaCheck className="text-version3-400 text-xl lg:text-4xl relative rotate-6 left-40" />
      </div>
      <h1 className="text-2xl text-neutral-900 font-bold">Cek Status Dokumen</h1>
      <p className="text-neutral-800 text-sm text-center">Cek status pengajuan dokumen Anda</p>
      <div className="absolute right-72 hidden lg:block">
        <FaTimes className="text-secondary-blue-400 text-xl lg:text-4xl relative left-11 rotate-12" />
        <FaStar className="text-secondary-blue-600 text-xl lg:text-4xl relative -rotate-12 -bottom-14" />
        <FaCheck className="text-version3-400 text-xl lg:text-4xl relative rotate-6 left-40" />
      </div>
    </section>
  );
};
