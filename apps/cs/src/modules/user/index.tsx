import { FC, ReactElement, useEffect, useState } from "react";
import Table from "./table";
import { Link } from "react-router-dom";
import { useRequest } from "../request/hooks";
import { useDebounce } from "../common/hooks";
import { useFilterAction } from "./hooks";
import DateRangePickerComponent from "../../components/molecules/input/date-range-picker";
import Search from "../../components/atoms/search";

const UserModules: FC = (): ReactElement => {
  const [option, setOption] = useState({
    date_from: "",
    page: "",
    per_page: "",
    search: "",
  });

  const [deb, setDeb] = useState("");

  const { setFilterAction } = useFilterAction();

  const { data: featureId } = useRequest();

  useEffect(() => {
    setFilterAction(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
    },
    [deb],
    500,
  );

  const handleRangeChange = (data: any) => {
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    setOption((prev) => ({ ...prev, date_from: startDate, date_to: endDate }));
  };

  return (
    <div className="bg-white w-full h-full my-2 rounded-md lg:px-8 px-4 py-2 ">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between pt-6">
        <div>
          <DateRangePickerComponent onRangeChange={(e) => handleRangeChange(e)} />
        </div>
        <div className="flex gap-x-2 lg:w-[50%] w-full">
          <Search
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
            placeholder="Search NIK & Nama"
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
      </div>
    </div>
  );
};

export default UserModules;
