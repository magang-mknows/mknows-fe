import { FC, ReactElement } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import { TiCamera } from 'react-icons/ti';

export const AddComent: FC = (): ReactElement => {
  return (
    <section className="w-full border-2 rounded-md dark:bg-[#222529] dark:border-2 dark:border-neutral-500 shadow-sm gap-5 mb-6">
      <label
        htmlFor="postComment"
        className="flex justify-between py-3 px-3 w-full gap-4 items-center rounded-md   bg-neutral-100 dark:bg-[#222529] dark:border-2 dark:border-neutral-800 text-neutral-500 "
      >
        <input
          type="text"
          className=" dark:text-neutral-200 outline-none text-neutral-700 bg-transparent md:text-sm text-xs px-2"
          id="postComment"
          placeholder="Ketikan Balasan Disini"
        />
        <section className="flex gap-2 items-center text-lg lg:text-xl">
          <TiCamera className="text-neutral-600 dark:text-neutral-400" />
          <FaTelegramPlane className="text-primary-500 dark:text-[#17A2B8]" />
        </section>
      </label>
    </section>
  );
};
