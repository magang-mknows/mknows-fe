import { FC, ReactElement } from "react";
import { formatDate } from "@mknows-frontend-services/utils";
import { useFilterAction, useQuota } from "./hooks";

const Table: FC = (): ReactElement => {
  const { getFilterAction } = useFilterAction();
  const { data } = useQuota(getFilterAction);

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-gray-700 font-light bg-[#D0F9E3] ">
          <tr>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No Permintaan</p>
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Jenis Produk</p>
              </div>
            </th>
            <th scope="col" className=" px-6 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
              </div>
            </th>
            <th scope="col" className=" px-6 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Jumlah Kuota</p>
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Status</p>
              </div>
            </th>
          </tr>
        </thead>
        {data?.data.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff]">
<<<<<<< HEAD
                <td className="px-8 py-1 text-[#262626]">
                  {item.request_number}
                </td>
                <td className="px-10 py-1 font-semibold text-neutral-800">
                  {item.feature.name}
                </td>
                <td className="px-0 py-1">
                  {formatDate({ date: new Date(item.created_at) })}
                </td>
=======
                <td className="px-8 py-1 text-[#262626]">{item.request_number}</td>
                <td className="px-10 py-1 font-semibold text-neutral-800">{item.feature.name}</td>
                <td className="px-14 py-1">{formatDate({ date: new Date(item.created_at) })}</td>
>>>>>>> 1c6d27fc30e454d22023442e30c16a4c69b1fb92
                <td className="px-20 py-1">{item.quantity}</td>
                <td className="px-6 py-1 bg-green-400">
                  <button
                    className={` ${
                      item.status === "SUCCESS"
                        ? "bg-success-500"
                        : item.status === "PROCESS"
                        ? "bg-[#3B8BDB]"
                        : "bg-[#EE2D24]"
                    } text-white w-[100px] text-sm font-semibold uppercase py-1.5 rounded-md cursor-default`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
