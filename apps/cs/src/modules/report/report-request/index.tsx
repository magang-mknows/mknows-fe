import { ReactElement, FC } from "react";
import { Search } from "@mknows-frontend-services/components/atoms";
import { useReportQuery } from "../hooks";
import { DateRangePickerComponent } from "@mknows-frontend-services/components/molecules";
import Table from "./table";

const ReportRequest: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();
  const handleRangeChange = () => {
    console.log("ok");
  };
  return (
    <div className="relative">
      <div className="mt-9 lg:my-9 my-20  gap flex lg:flex-row flex-col h-[40px] items-center justify-between">
        <DateRangePickerComponent width="80" onRangeChange={handleRangeChange} />
        <div className="w-[50%] ">
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
                onChange={(e: { target: { value: string } }) => setReportQuery(e.target.value)}
                placeholder="Search No Permintaan, Jenis Permintaan, Tanggal, Status"
              />
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <Table />
      <div className="flex gap-1 justify-end py-2 font-semibold text-neutral-500 text-xs ">
        Untuk melihat riwayat permintaan sebelumnya{" "}
        <span className="text-secondary-500">
          {" "}
          <a href="/dashboard/report">Klik Disini</a>
        </span>
      </div>
    </div>
  );
};

export default ReportRequest;
