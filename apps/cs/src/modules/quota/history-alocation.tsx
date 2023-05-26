import { FC, ReactElement, useEffect, useState } from "react";
import Search from "../../components/atoms/search";
import DateRangePickerComponent from "../../components/molecules/input/date-range-picker";
import Table from "./table";
import { useFilterAction } from "./hooks";
import { useRequest } from "../request/hooks";
import { useDebounce } from "../common/hooks";

const RiwayatAlokasi: FC = (): ReactElement => {
  const [option, setOption] = useState({
    date_from: "",
    page: "",
    per_page: "",
    search: "",
    feature: "",
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
    <section className="my-14 w-full">
      <div className="font-bold text-2xl text-[#444444]">Riwayat Alokasi Kuota</div>
      <div className="mt-9 lg:my-9 my-20  gap flex lg:flex-row flex-col h-[40px] items-center justify-between">
        <DateRangePickerComponent onRangeChange={(e) => handleRangeChange(e)} />
        <div className="w-[50%] ">
          <div className="flex flex-row gap lg:gap-x-3 gap-x-4 w-full mt-4 lg:mt-0">
            <div className="w-[50%]">
              <select
                onChange={(e) => setOption((prev) => ({ ...prev, feature: e.target.value }))}
                value={option.feature}
                id="category"
                className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option selected>Semua</option>
                {featureId?.data?.map((item, key) => (
                  <option key={key} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <Search
                value={deb}
                onChange={(e) => setDeb(e.target.value)}
                placeholder="Search No Permintaan, NIK, Nama, Tanggal, Status"
              />
            </div>
          </div>
        </div>
      </div>
      <Table />
      <div className="lg:text-xs py-2 text-[10px] flex flex-row justify-between">
        <div className=" text-neutral-400 font-base">Menampilkan 1-10 dari 110 hasil</div>
      </div>
    </section>
  );
};

export default RiwayatAlokasi;
