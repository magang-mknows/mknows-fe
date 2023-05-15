import { FC, ReactElement } from 'react';
import { useResultData } from './hooks';

const Table: FC = (): ReactElement => {
  const { getResultData } = useResultData();

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
        {getResultData.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff]">
                <td className="px-8 py-1 text-[#262626]">{item.no}</td>
                <td className="px-10 py-1 font-semibold text-neutral-800">
                  {item.jenis_produk}
                </td>
                <td className="px-14 py-1">{item.tggl_permintaan}</td>
                <td className="px-20 py-1">{item.jumlah_kuota}</td>
                <td className="px-6 py-1 bg-green-400">
                  <button
                    className={` ${
                      item.skor === 'Berhasil'
                        ? 'bg-success-500'
                        : item.skor === 'Proses'
                        ? 'bg-[#3B8BDB]'
                        : 'bg-[#EE2D24]'
                    } text-white w-[100px] text-sm font-semibold uppercase py-1.5 rounded-md cursor-default`}
                  >
                    {item.skor}
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
