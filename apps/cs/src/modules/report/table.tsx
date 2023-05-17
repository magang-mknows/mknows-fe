import { FC, ReactElement, Fragment } from 'react';

import { useReportData } from './hooks';
import { IconDropdown, IconTable } from '../../components/atoms';

const Table: FC = (): ReactElement => {
  const { getReportData } = useReportData();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400 overflow-x-scroll ">
        <thead className="text-xs border text-[#A3A3A3] font-semibold bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
          <tr>
            <th></th>
            <th scope="col" className="px-2 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No</p>
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>NIK</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="w-full px-4 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Nama</p>
                <IconDropdown />
              </div>
            </th>

            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Status</p>
                <IconDropdown />
              </div>
            </th>
          </tr>
        </thead>
        {getReportData.map((item, key) => {
          return (
            <Fragment key={key}>
              <tbody>
                <tr className="bg-white border-b dark:bg-[#ffff] ">
                  <td className="px-4">
                    <IconTable />
                  </td>
                  <td className="px-6 py-2 text-[#262626]">{key + 1}</td>
                  <td className="px-6 py-2 text-[#262626]">{item.nik}</td>
                  <td className="px-6 py-2 font-semibold text-[#262626] ">
                    {item.nama}
                  </td>

                  <td className="px-4 py-2 bg-green-400">
                    <button
                      className={` ${
                        item.status === 'Sangat Baik'
                          ? 'bg-success-400'
                          : item.status === 'Cukup Buruk'
                          ? 'bg-warning-500'
                          : 'bg-error-400'
                      } text-white w-[110px] text-sm p-2 rounded-md cursor-default`}
                    >
                      {item.status}
                    </button>
                  </td>
                </tr>
              </tbody>
            </Fragment>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
