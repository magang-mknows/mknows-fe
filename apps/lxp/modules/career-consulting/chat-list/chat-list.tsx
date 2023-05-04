import { FC, Fragment, ReactElement } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ConsultingChatCard from './chat-card/chat-card';

export const CareerChatList: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="border-[3px] bg-neutral-100 border-neutral-300 mb-10 rounded-md flex justify-between items-center h-10 px-4">
        <input
          type="text"
          placeholder="Cari chat"
          className="w-full bg-neutral-100  outline-none text-sm"
        />
        <AiOutlineSearch className="text-xl text-version3-400" />
      </div>
      <div>
        <h1 className="text-sm font-bold text-neutral-800 mb-3">
          Riwayat Chat Karir dan Cita-Cita
        </h1>
        <div className="h-fit w-full bg-neutral-50 rounded-md shadow-sm px-5 py-7">
          <ConsultingChatCard />
        </div>
      </div>
    </Fragment>
  );
};
