import { FC, ReactElement } from 'react';
import { useResultData } from './hooks';
import { IconDropdown, IconTable } from '../../components/atoms';

const Table: FC = (): ReactElement => {
  const { getResultData } = useResultData();

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF]">
          <tr>
            <th></th>
            <th>No. </th>
            <th scope="col" className="px-6 py-2 cursor-default w-[10%]">
              <div className="flex gap-2 justify-center items-center">
                <p>No. Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>NIK</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="w-full px-6 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Nama</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Selesai</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Status</p>
                <img
                  src="/assets/request-page/markdown-icon.svg"
                  alt="markdown icon"
                />
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
                <td className="px-6 py-2 text-[#262626] ">{item.no}</td>
                <td className="px-6 py-2 text-[#262626]">{item.nik}</td>
                <td className="px-6 py-2 font-semibold text-[#262626]">
                  {item.nama}
                </td>
                <td className="px-6 py-2">
                  {item.tggl_permintaan} {item.waktu_permintaan}
                </td>
                <td className="px-6 py-2">
                  {item.tggl_selesai} {item.waktu_selesai}
                </td>
                <td className="px-6 py-2 bg-green-400">
                  {item.skor === 'Sangat Baik' ? (
                    <button className="bg-success-400 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                      {item.skor}
                    </button>
                  ) : item.skor === 'Cukup Buruk' ? (
                    <button className="bg-warning-500 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                      {item.skor}
                    </button>
                  ) : item.skor === 'Sangat Buruk' ? (
                    <button className="bg-error-400 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                      {item.skor}
                    </button>
                  ) : (
                    <span className="px-11">-</span>
                  )}
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
