import { FC, ReactElement } from 'react';
import Image from 'next/image';
import model from './assets/model.png';
import check from './assets/checlist.svg';

export const AdvantageAlternatif: FC = (): ReactElement => {
  return (
    <div className="flex px-20 bg-white py-10 gap-8">
      <div className="w-[50%] pt-32">
        <Image src={model} alt="g1" className="w-auto h-auto" />
      </div>
      <div className="flex w-[50%] pt-16 h-auto justify-center items-center">
        <div className="flex flex-col gap-8">
          <h1 className="bg-yellow-500 text-white p-1 absolte z-40 text-black font-[700] text-[36px]">
            Mengapa Kampus Gratis ?
          </h1>
          <p>
            Ada banyak kategori pelatihan terlaris yang ada di Kampus Gratis
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Image src={check} alt="g1" className="w-auto h-auto" />
              <p>Belajar semua materi GRATIS</p>
            </div>
            <div className="flex gap-4">
              <Image src={check} alt="g1" className="w-auto h-auto" />
              <p>Dibimbing oleh mentor yang profesional</p>
            </div>
            <div className="flex gap-4">
              <Image src={check} alt="g1" className="w-auto h-auto" />
              <p>Dukungan untuk karir masa depan</p>
            </div>
            <div className="flex gap-4">
              <Image src={check} alt="g1" className="w-auto h-auto" />
              <p>Pembelajaran yang fleksibel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
