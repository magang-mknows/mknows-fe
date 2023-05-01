import { FC, ReactElement } from 'react';
import maintnence from '../assets/images/maintnence.svg';
import Image from 'next/image';
import { Button } from '@mknows-frontend-services/components/atoms';
import { BaseLayout } from '../layout';

export const MaintnenceModule: FC = (): ReactElement => {
  return (
    <BaseLayout title="Maintnence">
      <section className="flex items-center flex-col justify-center w-full h-screen">
        <Image src={maintnence} alt="maintnence" />
        <span className="text-2xl font-[600]">Mohon maaf halaman ini</span>
        <span className="text-4xl font-[700] text-primary-base">
          Sedang dalam Maintenence
        </span>
        <Button
          type="button"
          href="/"
          className="bg-primary-base w-auto h-auto p-4 rounded-lg text-white my-6 font-[700]"
        >
          Kembali ke Halaman Depan
        </Button>
      </section>
    </BaseLayout>
  );
};
