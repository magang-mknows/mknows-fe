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
      <div className="flex flex-col lg:flex-row justify-between lg:gap-16 gap-0 py-10">
        <DateRangePickerComponent onRangeChange={handleRangeChange} />
        <div className="w-full">
          <div className="flex flex-row gap lg:gap-x-3 gap-x-4 w-full mt-4 lg:mt-0">
            <div className="w-[50%]">
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
            <div className="w-full">
              <Search
                value={getQuotaQuery}
                onChange={(e: { target: { value: string } }) =>
                  setQuotaQuery(e.target.value)
                }
                placeholder="Search No Permintaan, NIK, Nama, Tanggal, Status"
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
