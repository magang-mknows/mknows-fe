import { FC, ReactElement } from 'react';
import { useReportQuery } from './hooks';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';
import { DateInput } from '../../components/molecules/input/date-input';
import Table from './table';

const ReportModules: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-16 gap-6 lg:px-8 px-2 pt-12">
        <DateInput />
        <div className="flex flex-row justify-end lg:flex-row lg:gap-2 gap-0">
          <select
            id="category"
            className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px]"
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
          <Search
            value={getReportQuery}
            onChange={(e: { target: { value: string } }) =>
              setReportQuery(e.target.value)
            }
            className="w-full"
          />
        </div>
      </div>

      <div className="lg:p-8 p-2">
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default ReportModules;
