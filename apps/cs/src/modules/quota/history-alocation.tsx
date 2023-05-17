import { FC, ReactElement } from 'react';
import Search from '../../components/atoms/search';
import { useQuotaQuery } from './hooks';
import DateRangePickerComponent from '../../components/molecules/input/date-range-picker';
import Table from './table';

const RiwayatAlokasi: FC = (): ReactElement => {
  const { setQuotaQuery, getQuotaQuery } = useQuotaQuery();
  const handleRangeChange = () => {
    console.log('ok');
  };
  return (
    <section className="my-14 w-full">
      <div className="font-bold text-2xl text-[#444444]">
        Riwayat Alokasi Kuota
      </div>
      <div className="flex lg:flex-row flex-col my-10">
        <div className="flex w-full justify-between">
          <div>
            <DateRangePickerComponent onRangeChange={handleRangeChange} />
          </div>
          <div className="flex gap-x-3 w-full my-4 lg:my-0 justify-end">
            <div className="w-[40%]">
              <select
                id="category"
                className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option selected>Semua</option>
                <option value="US">AI Optimation</option>
                <option value="CA">AI Document Verification</option>
                <option value="FR">AI Condition Analysis</option>
                <option value="DE">AI Location & Movement</option>
              </select>
            </div>
            <div className="w-auto">
              <Search
                value={getQuotaQuery}
                onChange={(e: { target: { value: string } }) =>
                  setQuotaQuery(e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Table />
      <div className="lg:text-xs py-2 text-[10px] flex flex-row justify-between">
        <div className=" text-neutral-400 font-base">
          Menampilkan 1-10 dari 110 hasil
        </div>
      </div>
    </section>
  );
};

export default RiwayatAlokasi;
