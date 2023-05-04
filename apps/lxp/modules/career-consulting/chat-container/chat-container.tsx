import React, { FC, Fragment, ReactElement } from 'react';
import Image from 'next/image';
import exampleAvatar from '../chat-list/chat-card/assets/user.svg';

export const ConsultingChatContainer: FC = (): ReactElement => {
  return (
    <Fragment>
      <header className="w-full flex flex-col items-center py-7">
        <Image
          src={exampleAvatar}
          alt="user-view"
          height={80}
          width={80}
          loading="eager"
          className="mb-3"
        />
        <h1 className="text-lg text-neutral-500 mb-3 text-center">
          Konsultasi dengan <span className="font-bold">Ryandi Margono</span>
        </h1>
        <div className="h-0.5 w-full bg-neutral-300"></div>
      </header>
      <main className="w-full flex justify-center py-10">
        {/* <Button size="large" text="Mulai Chat" type="primary" /> */}
      </main>
    </Fragment>
  );
};
