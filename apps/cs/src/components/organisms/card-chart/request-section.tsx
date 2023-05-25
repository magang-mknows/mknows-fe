import { FC, ReactElement } from 'react';

import { DropDownDashboard } from '../../molecules/dropdown';
import ChartLine from '../../molecules/chart/chart-line';

const RequestSection: FC = (): ReactElement => {
  return (
    <section className="bg-white h-fit w-full rounded-md md:py-5 py-0 my-4">
      <h1 className="text-xl font-bold p-4">RIWAYAT PERMINTAAN</h1>
      <div className="flex justify-between py-3 px-4 md:flex-row flex-col md:space-y-0 space-y-4 ">
        <div>
          <DropDownDashboard />
        </div>
        <div>
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
      <div className="flex px-8 justify-end gap-4">
        <button className="border border-primary-500 rounded-full w-6 h-6 text-md">
          +
        </button>
        <button className="border border-primary-500 rounded-full w-6 text-md">
          -
        </button>
      </div>
      <div className="px-4 w-full py-8 flex justify-center">
        <ChartLine />
      </div>
    </section>
  );
};
export default RequestSection;
