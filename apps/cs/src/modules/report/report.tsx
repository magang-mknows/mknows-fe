import { FC, ReactElement } from 'react';
import { useReportQuery } from './hooks';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';
import DateRangePickerComponent from '../../components/molecules/input/date-range-picker';
import Table from './table';

const ReportModules: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();
  const handleRangeChange = () => {
    console.log('ok');
  };

  return (
    <div className="bg-white w-full h-full my-2 ">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-16 gap-0 pt-12">
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
                value={getReportQuery}
                onChange={(e: { target: { value: string } }) =>
                  setReportQuery(e.target.value)
                }
                placeholder="Search No Permintaan, NIK, Nama, Tanggal, Status"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-8 py-2">
        <Table />
      </div>
      <div className="lg:text-xs text-[10px] flex flex-row justify-between">
        <div className=" text-neutral-400 font-base">
          Menampilkan 1-10 dari 110 hasil
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ReportModules;
