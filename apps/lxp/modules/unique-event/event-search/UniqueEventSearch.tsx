import React, { FC, ReactElement } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const UniqueEventSearch: FC = (): ReactElement => {
  return (
    <div className="flex items-center w-full gap-2 px-3 py-3 mb-8 rounded-md shadow-sm bg-neutral-100">
      <AiOutlineSearch className="text-xl text-neutral-400" />
      <input
        type="text"
        placeholder="Cari Webinar"
        className="w-full text-sm border-none outline-none bg-neutral-100 text-neutral-700"
      />
    </div>
  );
};

export default UniqueEventSearch;
