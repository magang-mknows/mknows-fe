import { FC, ReactElement } from 'react';
import { useResultData } from '../hooks';
import { IconDropdown, IconTable } from '../../../components/atoms';

const Table: FC = (): ReactElement => {
  const { getResultData } = useResultData();

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF]">
          <tr>
            <th></th>
            <th>No. </th>
            <th scope="col" className="px-4 py-2 cursor-default w-[10%]">
              <div className="flex gap-2 justify-center items-center">
                <p>No. Permintaan</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Jenis Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Jumlah User</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Selesai</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        {getResultData.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff] ">
                <td className="px-4">
                  <IconTable />
                </td>
                <td className="py-2 text-[#262626]">{key + 1}</td>
                <td className="px-4 py-2 text-[#262626] ">{item.no}</td>
                <td className="px-8 py-2 text-[#262626]">
                  {item.jenis_produk}
                </td>
                <td className="flex items-center justify-center py-2 text-[#262626]">
                  {item.jumlah_user}
                </td>
                <td className="px-8 py-2 ">
                  {item.tggl_permintaan} {item.waktu_permintaan}
                </td>
                <td className="px-8 py-2">
                  {item.tggl_selesai} {item.waktu_selesai}
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
