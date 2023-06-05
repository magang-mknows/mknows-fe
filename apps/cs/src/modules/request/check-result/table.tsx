import { IConDelete } from "../../../components/atoms";
import ToolTip from "../../../components/atoms/tooltip";
import { FC, ReactElement } from "react";
import { useFilterActionProcess, useProcess } from "../hooks";

const Table: FC = (): ReactElement => {
  const { getFilterActionProcess } = useFilterActionProcess();
  const { data } = useProcess(getFilterActionProcess);

  return (
    <div className="pt-4 lg:mt-0">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 overflow-x-scroll ">
        <thead className="text-xs border text-[#A3A3A3] font-semibold bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
          <tr>
            <th scope="col" className="pl-7 py-2 cursor-default ">
              <div className="">
                <p>No</p>
              </div>
            </th>
            <th scope="col" className="px-2 py-2 cursor-default">
              <div className="flex justify-center gap-2">
                <p>NIK</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className=" py-2 cursor-default">
              <div className="flex justify-center gap-2">
                <p>Nama</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className=" py-2 cursor-default ">
              <div className="">
                <p>Hapus</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item, key) => {
            return (
              <tr key={key} className="text-[#262626] bg-white border-b  dark:bg-[#ffff] ">
                <td className="pl-8">{key + 1}</td>
                <td className="px-0 py-2 flex justify-center">{item.nik}</td>
                <td className="py-2 font-semibold ">
                  <span className="flex justify-center">{item.name}</span>
                </td>
                <td>
                  <div className="pl-1">
                    <button className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
                      <ToolTip className="bg-white z-50" tooltip="Delete">
                        <IConDelete />
                      </ToolTip>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
