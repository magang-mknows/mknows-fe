import { ReactElement, FC } from 'react';
import Table from './table';
import Pagination from '../../../components/atoms/pagination';
import Search from '../../../components/atoms/search';
import { useReportQuery } from '../hooks';

const ReportRequest: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();
  return (
    <div className="relative">
      <div className="mt-9 lg:my-9 my-20  gap flex lg:flex-row flex-col h-[40px] items-center">
        <p className="font-bold text-[#444444] text-[24px] lg:ml-8 ml-0 lg:w-[60%] w-full">
          Permintaan Hari ini
        </p>
        <div className="w-full">
          <div className="flex flex-row gap lg:gap-x-3 gap-x-4 w-full mt-4 lg:mt-0">
            <div className="w-[50%]">
              <select
                id="category"
                className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option selected>Semua</option>
                <option value="US">AI Identity</option>
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
                placeholder="Search No Permintaan, Jenis Permintaan, Tanggal, Status"
              />
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <Table />
      <div className="flex gap-1 justify-end py-2 font-semibold text-neutral-500 text-xs ">
        Untuk melihat riwayat permintaan sebelumnya{' '}
        <span className="text-[#4FA0CF]">
          {' '}
          <a href="/">Klik Disini</a>
        </span>
      </div>

      <Pagination />
    </div>
  );
};

export default ReportRequest;
