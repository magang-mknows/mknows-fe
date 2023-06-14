import { ReactElement, FC, useState, useEffect } from "react";
import { Search } from "@mknows-frontend-services/components/atoms";
import { useFilterActionProcess } from "../hooks";
import { useDebounce } from "../../common/hooks";
import Table2 from "./table";

const ProcessModule: FC = (): ReactElement => {
  // const { setResultQuery, getResultQuery } = useResultQuery();
  const [option, setOption] = useState({
    search: "",
    feature: "",
    per_page: "",
    page: "",
  });

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
    <section className="flex flex-col">
      <div className="my-8 flex lg:flex-row flex-col h-fit lg:ml-8 ml-0 space-y-8 items-center">
        <p className="font-bold text-BLACK-base text-[24px] w-full">Permintaan Hari ini</p>
        <div className="w-full ">
          <Search
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
            placeholder="Search NIK dan Nama"
          />
        </div>
      </div>
      <Table2 />
      {/* table */}

      <div className="flex gap-1 py-2 justify-end font-semibold text-neutral-500 text-xs ">
        Untuk melihat riwayat permintaan sebelumnya{" "}
        <span className="text-secondary-500">
          {" "}
          <a href="/dashboard/report?tab=laporan-user">Klik Disini</a>
        </span>
      </div>
    </section>
  );
};

export default ProcessModule;
