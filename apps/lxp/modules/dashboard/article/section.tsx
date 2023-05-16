import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { ArticleCarousel } from './carousel';

export const ArticleSection: FC = (): ReactElement => {
  return (
    <div className=" w-full  overflow-hidden mb-10">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-lg font-bold">Sekilas Ilmu</h1>
        <Link className="text-sm text-blue-600 font-bold" href={'/'}>
          Lihat Detail
        </Link>
      </div>
      <ArticleCarousel />
    </div>
  );
};
