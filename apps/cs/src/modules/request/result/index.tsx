import { ReactElement, FC, useState, useEffect } from "react";
import { Search } from "@mknows-frontend-services/components/atoms";
import Table from "./table";
import { useDebounce } from "../../common/hooks";
import { useFilterActionResult } from "../hooks";

const ResultModule: FC = (): ReactElement => {
  const [option, setOption] = useState({
    feature: "",
    per_page: "",
    page: "",
  });
  const [deb, setDeb] = useState("");

  const { setFilterActionResult } = useFilterActionResult();

  useEffect(() => {
    setFilterActionResult(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
    },
    [deb],
    400,
  );
  return (
    <div className="relative">
      <div className="mt-9 lg:my-9 my-20  gap flex lg:flex-row flex-col h-[40px] items-center">
        <p className="font-bold text-BLACK-base text-[24px] lg:ml-8 ml-0 lg:w-[60%] w-full">
          Permintaan Hari ini
        </p>
        <div className="w-full">
          <div className="flex flex-row gap lg:gap-x-3 gap-x-4 w-full mt-4 lg:mt-0">
            <div className="w-[50%]">
              <select
                id="category"
                className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option defaultValue={""}>Semua</option>
                <option value="US">AI Identity</option>
                <option value="CA">AI Document Verification</option>
                <option value="FR">AI Condition Analysis</option>
                <option value="DE">AI Location & Movement</option>
              </select>
            </div>
            <div className="w-full">
              <Search
                value={deb}
                onChange={(e) => setDeb(e.target.value)}
                placeholder="Search NIK dan Nama"
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
          <a href="/dashboard/report?tab=laporan-user">Klik Disini</a>
        </span>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};

export default ResultModule;
