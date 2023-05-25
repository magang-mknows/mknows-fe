import { FC, ReactElement } from 'react';

export const TestimonyCard: FC = (): ReactElement => {
  return (
    <div className="flex flex-col bg-white w-[406px] h-[254px] rounded-md shadow-md p-6">
      <div className="flex gap-3">
        <div className="w-[70px] h-[70px] rounded-full bg-yellow-500"></div>
        <span className="flex flex-col justify-center items-center">
          <p className="text-[18px] font-semibold font-700">Sandiaga</p>
          <p className="text-neutral-500 text-[16px]">UI Designer</p>
        </span>
      </div>
      <div>
        <p className="text-neutral-500 text-[16px] pt-[24px]">
          aku berterima kasih banget adanya program pelatihan gratis dari Kampus
          Gratis. Kalo Ga ada program ini, saya sulit untuk melanjutkan studi
          saya karena finansial.
        </p>
      </div>
    </div>
  );
};
