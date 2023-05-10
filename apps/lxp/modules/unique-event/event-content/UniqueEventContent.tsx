import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

const UniqueEventContent: FC = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <Link
        href={'acara-unik/detail/Webinar-Cyber-Security'}
        className="overflow-hidden "
      >
        <div className="w-full px-4 py-4 overflow-hidden bg-neutral-50">
          <Image
            src={'/assets/event/event.svg'}
            className="w-full mb-2"
            height={100}
            width={100}
            alt="event-view"
          />
          <h1 className="text-base font-bold text-neutral-800">
            Webinar Cyber Security
          </h1>
          <p className="mb-3 text-lg font-bold text-version3-500">GRATIS</p>
          <p className="text-xs text-neutral-400">
            Tuesday, 28 February 2023 19:00 WIB
          </p>
        </div>
      </Link>
    </section>
  );
};

export default UniqueEventContent;
