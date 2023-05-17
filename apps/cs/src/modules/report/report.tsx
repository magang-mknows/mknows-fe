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
      <div className="flex flex-col lg:flex-row justify-between gap-16 pt-12">
        <DateRangePickerComponent onRangeChange={handleRangeChange} />
        <div className="flex flex-col justify-end lg:flex-row gap-1">
          <select
            id="category"
            className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[60%] px-3 "
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
          />
        </div>
      </div>

      <div className="lg:pt-8 py-2">
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default ReportModules;
