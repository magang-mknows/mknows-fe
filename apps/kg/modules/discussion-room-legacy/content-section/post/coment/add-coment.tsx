import { FC, ReactElement } from 'react';

import { FaTelegramPlane } from 'react-icons/fa';
import { TiCamera } from 'react-icons/ti';

export const AddComent: FC = (): ReactElement => {
  return (
    <section className="w-full rounded-md dark:bg-[#222529] border-none dark:border-2 dark:border-neutral-500 shadow-sm gap-5 mb-6">
      <label
        htmlFor="postComment"
        className="flex justify-between py-3 px-3 w-full gap-4 items-center rounded-md bg-neutral-100 dark:bg-[#222529] dark:border-2 dark:border-neutral-800 text-neutral-500 "
      >
        <input
          type="text"
          className="w-full px-2 text-xs outline-none dark:text-neutral-200 text-neutral-700 bg-neutral-100 md:text-sm"
          id="postComment"
          placeholder="Ketikan Balasan Disini"
        />
        <section className="flex items-center gap-2 text-lg lg:text-xl">
          <TiCamera className="text-neutral-600 dark:text-neutral-400" />
          <FaTelegramPlane className="text-primary-500 dark:text-[#17A2B8]" />
        </section>
      </label>
    </section>
  );
};
