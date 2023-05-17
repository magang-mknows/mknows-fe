import { ReactElement, FC } from 'react';
import { useResultQuery } from '../hooks';
import Search from '../../../components/atoms/search';
import Pagination from '../../../components/atoms/pagination';
import Table from './table';

const ProcessModule: FC = (): ReactElement => {
  const { setResultQuery, getResultQuery } = useResultQuery();

  return (
    <section>
      <div className="my-9 flex lg:flex-row flex-col h-[40px]  items-center">
        <p className="font-bold text-[#444444] text-[24px] ml-4 w-full">
          Permintaan Hari ini
        </p>
        <div className="flex flex-row gap gap-x-3 w-full mt-4 lg:mt-0 ">
          <Search
            value={getResultQuery}
            onChange={(e: { target: { value: string } }) =>
              setResultQuery(e.target.value)
            }
          />
        </div>
      </div>
      {/* table */}
      <Table />

      <div className="flex gap-1 py-2 justify-end font-semibold text-neutral-500 text-xs ">
        Untuk melihat riwayat permintaan sebelumnya{' '}
        <span className="text-[#4FA0CF]">
          {' '}
          <a href="/">Klik Disini</a>
        </span>
      </div>

      <Pagination />
    </section>
  );
};

export default ProcessModule;
