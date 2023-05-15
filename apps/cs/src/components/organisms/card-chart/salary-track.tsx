import { FC, ReactElement } from 'react';
import { DropDownDashboard } from '../../molecules/dropdown';
import ChartBar from '../../molecules/chart/chart-bar';

const SalaryTrack: FC = (): ReactElement => {
  return (
    <section className="bg-white h-fit w-full rounded-md md:py-5 py-0 my-4">
      <h1 className="text-xl font-semibold p-4">TRACK PENDAPATAN</h1>
      <div className="flex justify-between py-3 px-4 md:flex-row flex-col md:space-y-0 space-y-4">
        <div className="px-4">
          <DropDownDashboard />
        </div>
        <div className="px-2">
          <select
            id="category"
            className="bg-white border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[140px] lg:w-[120px] md:w-[140px] w-full p-2 "
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
        </div>
      </div>
      <div className="px-4 h-fit w-full">
        <ChartBar />
      </div>
    </section>
  );
};
export default SalaryTrack;
