import { FC, ReactElement } from "react";
import { useFilterActionProcess, useProcess } from "../hooks";
import { formatDate } from "@mknows-frontend-services/utils";

const Table: FC = (): ReactElement => {
  const { getFilterActionProcess } = useFilterActionProcess();
  const { data } = useProcess(getFilterActionProcess);

  return (
    <div className="overflow-x-scroll mt-20 lg:mt-0">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500   overflow-x-scroll ">
        <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
          <tr>
            <th scope="col" className="px-2 py-2 cursor-default ">
              <div className="flex gap-5 justify-center items-center">
                <p>No</p>
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No. Permintaan</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className="px-2 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>NIK</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className="w-auto px-6 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Nama</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 items-center">
                <p>Tanggal Permintaan</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className=" py-2 cursor-default">
              <p>Kendala Proses</p>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Status</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item, key) => {
            return (
              <tr key={key} className="text-[#262626] bg-white border-b  dark:bg-[#ffff] ">
                <td className="px-6">{key + 1}</td>
                <td className="pl-4 py-2">{item.request_number}</td>
                <td className="px-0 py-2">{item.nik}</td>
                <td className="w-[25%] pl-10 py-2 font-semibold">{item.name}</td>
                <td className="px-4 py-2 text-gray-500 ">
                  {formatDate(new Date(item.requested_at))}
                  {/* {item.requested_at} */}
                </td>
                <td className="px-1 py-2">{item.problem ? item.problem : "-"}</td>
                <td className="px-4 py-2 ">
                  {/* <button className="bg-[#F59E0B] text-white w-[110px] text-sm p-2 rounded-md cursor-default">
                    Menunggu
                  </button> */}
                  {item.status === "MENUNGGU" ? (
                    <button className="bg-[#F59E0B] text-white w-[110px] text-sm p-2 rounded-md cursor-default">
                      {item.status}
                    </button>
                  ) : item.status === "GAGAL" ? (
                    <button className="bg-[#EE2D24] text-white w-[110px] text-sm p-2 rounded-md cursor-default">
                      {item.status}
                    </button>
                  ) : (
                    <span className="px-11">-</span>
                  )}
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
