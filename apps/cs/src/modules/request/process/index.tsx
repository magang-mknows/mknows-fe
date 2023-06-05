import { ReactElement, FC, useState, useEffect } from "react";
import { useProcessFilter } from "../hooks";
import Search from "../../../components/atoms/search";
import Pagination from "../../../components/atoms/pagination";
import Table from "./table";
import { useFilterAction } from "../../quota/hooks";
import { useDebounce } from "../../common/hooks";

const ProcessModule: FC = (): ReactElement => {
  // const { setResultQuery, getResultQuery } = useResultQuery();
  const [option, setOption] = useState({
    search: "",
    feature: "",
    per_page: "",
    page: "",
  });

  const { data: featureId } = useProcessFilter();

  const [deb, setDeb] = useState("");

  const { setFilterAction } = useFilterAction();

  useEffect(() => {
    setFilterAction(option);
  }, [option, setFilterAction]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
    },
    [deb],
    400,
  );

  return (
    <section>
      <div className="my-9 flex lg:flex-row flex-col h-[40px]  items-center">
        <p className="font-bold text-[#444444] text-[24px] ml-8 w-full">Permintaan Hari ini</p>
        <div className="flex flex-row gap gap-x-3 w-full mt-4 lg:mt-0 ">
          <div className="w-[50%]">
            <select
              onChange={(e) => setOption((prev) => ({ ...prev, feature: e.target.value }))}
              value={option.feature}
              id="category"
              className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
            >
              <option value="" defaultValue={"Halo"}>
                Semua
              </option>
              {featureId?.data?.map((item, key) => (
                <option key={key} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <Search value={deb} onChange={(e) => setDeb(e.target.value)} placeholder="Search" />
        </div>
      </div>
      {/* table */}
      <Table />

      <div className="flex gap-1 py-2 justify-end font-semibold text-neutral-500 text-xs ">
        Untuk melihat riwayat permintaan sebelumnya{" "}
        <span className="text-[#4FA0CF]">
          {" "}
          <a href="/dashboard/report">Klik Disini</a>
        </span>
      </div>

      <Pagination />
    </section>
  );
};

export default ProcessModule;
