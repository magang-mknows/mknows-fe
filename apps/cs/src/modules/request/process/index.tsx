import { ReactElement, FC, useState, useEffect } from "react";
import { useRequest } from "../hooks";
import Search from "../../../components/atoms/search";
import Pagination from "../../../components/atoms/pagination";
import Table from "./table2";
import { useFilterActionProcess } from "../hooks";
import { useDebounce } from "../../common/hooks";
import { any } from "prop-types";

const ProcessModule: FC = (): ReactElement => {
  // const { setResultQuery, getResultQuery } = useResultQuery();
  const [option, setOption] = useState({
    search: "",
    feature: "",
    per_page: "",
    page: "",
  });

  const { data: featureId } = useRequest();

  const [deb, setDeb] = useState("");

  const { setFilterActionProcess } = useFilterActionProcess();

  useEffect(() => {
    setFilterActionProcess(option);
  }, [option]);

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
        <div className="flex flex-row gap gap-x-3 w-[50%] mt-4 lg:mt-0 ">
          <Search
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
            placeholder="Search NIK dan Nama"
          />
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

      {/* <Pagination /> */}
    </section>
  );
};

export default ProcessModule;
