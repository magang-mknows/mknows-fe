import { FC, ReactElement } from 'react';

export const TestimonyCard: FC = (): ReactElement => {
  return (
    <section className="bg-white w-auto shadow-sm h-full p-[31px] rounded-lg flex flex-col gap-y-[30px]">
      <div className="flex w-[70px] h-[70px] rounded-full bg-error-base"></div>
      <p>
        aku berterima kasih banget adanya program pelatihan gratis dari Kampus
        Gratis. Kalo Ga ada program ini, saya sulit untuk melanjutkan studi saya
        karena finansial.
      </p>
    </section>
  );
};
