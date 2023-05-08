import { Button } from '@mknows-frontend-services/components/atoms';
import { ShowDetailStatus } from '../../../store';
import React, { FC, ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';

const SummaryTable: FC = (): ReactElement => {
  const setDetailStatus = useSetRecoilState(ShowDetailStatus);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-white dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400 dark:divide-gray-700">
              <thead className="bg-primary-500">
                <tr className="divide-x divide-neutral-300 dark:divide-gray-700">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Semester
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    SKS Diambil
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    SKS Luus
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    IPK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-primary-600 font-bold">
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white ">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white ">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm  dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    3
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    108
                  </td>
                  <td className="px-6 py-4 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    96
                  </td>
                  <td className="px-6 py-4  border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td
                    scope="col"
                    className="text-centerpy-4 dark:text-white"
                    colSpan={3}
                  >
                    Rata-rata
                  </td>
                  <td className="col-span-4 py-4 dark:text-white">4.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-end mb-10"
        onClick={() => {
          setDetailStatus(true);
        }}
      >
        <Button
          className=" bg-green-500 hover:bg-green-600 cursor-pointer transition-colors ease-in-out duration-300 shadow-md text-sm flex relative items-center justify-center text-white dark:bg-primary-500 w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] font-medium"
          children={'Lihat Detail Nilai'}
          type={'button'}
        />
      </div>
    </div>
  );
};

export default SummaryTable;
