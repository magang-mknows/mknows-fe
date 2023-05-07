import { FC, ReactElement } from 'react';
import Image from 'next/image';
import exampleAvatar from './assets/user.svg';

const ConsultingChatCard: FC = (): ReactElement => {
  return (
    <section className="flex gap-4 flex-wrap md:flex-nowrap border-b border-neutral-400 pb-3 mb-5">
      <div className="relative flex-shrink-0">
        <Image
          src={exampleAvatar}
          alt="user-view"
          height={44}
          width={44}
          loading="eager"
        />
      </div>
      <div className="text-xs text-neutral-800 w-full ">
        <section className="flex justify-between mb-1.5 font-bold">
          <h1>Ryandi Margono</h1>
          <p className="text-neutral-500">14.00</p>
        </section>
        <p>Terima kasih atas nasehatnya, Pak. Saya akan coba implementasikan</p>
      </div>
    </section>
  );
};

export default ConsultingChatCard;
