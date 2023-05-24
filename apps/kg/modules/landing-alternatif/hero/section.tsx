import { FC, ReactElement } from 'react';
import Image from 'next/image';
import bg from './assets/bg.svg';
import model from './assets/model.png';
import { Button } from '@mknows-frontend-services/components/atoms';

export const HeroAlternatif: FC = (): ReactElement => {
  return (
    <section>
      <div className="flex absolute w-full z-0">
        <Image src={bg} alt={'tes'} />
      </div>
      <div className="flex relative z-20">
        <div className="flex p-16">
          <div>
            <h1 className="text-[44px] text-700 font-bold">
              SARJANA Gratis & Berkualitas Dengan Konversi SKS:
            </h1>
            <p className="text-[28px] text-primary-500 text-700 font-bold py-2">
              Kuliah, Pelatihan, Magang & Pengalaman Kerja
            </p>
            <p className="text-[20px] py-4">
              Platform Pendidikan Tinggi Gratis Pertama di Indonesia. Dengan
              akses belajar yang mudah bagi semua tanpa syarat
            </p>
            <Button
              type="button"
              href="/auth/register"
              className="hover:bg-primary-400 bg-primary-500 text-white font-[700] p-3 rounded-lg w-auto"
            >
              Coba Sekarang - Gratis
            </Button>
          </div>
          <div>
            <Image src={model} width={700} alt={'model'} />
          </div>
        </div>
      </div>
    </section>
  );
};
