import { FC, ReactElement } from "react";
import Table from "./table";
import { Link } from "react-router-dom";
import { useUserQuery } from "./hooks";
import DateRangePickerComponent from "../../components/molecules/input/date-range-picker";
import Search from "../../components/atoms/search";
import Pagination from "../../components/atoms/pagination";

const UserModules: FC = (): ReactElement => {
  const { setUserQuery, getUserQuery } = useUserQuery();
  const handleRangeChange = () => {
    console.log("ok");
  };

  return (
    <div className="bg-white w-full h-full my-2 rounded-md lg:px-8 px-4 py-2 ">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between pt-6">
        <div>
          <DateRangePickerComponent onRangeChange={handleRangeChange} />
        </div>
        <div className="flex gap-x-2 lg:w-[50%] w-full">
          <Search
            value={getUserQuery}
            onChange={(e: { target: { value: string } }) => setUserQuery(e.target.value)}
            placeholder="Search NIK, Nama, Tanggal, Berkas"
          />
          <Link to={"/dashboard/user/add-data"}>
            <button className="border bg-white text-primary-500 font-semibold md:w-[200px] w-[140px] border-primary-400 rounded-md p-2">
              + Tambah Data
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="py-4">
          <Table />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default UserModules;
