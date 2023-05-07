import { FC, ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import { showDetailState } from '../store';
import { Button } from '@mknows-frontend-services/components/atoms';

export const ScoreSummaryTable: FC = (): ReactElement => {
  const setShowDetail = useSetRecoilState(showDetailState);

  return (
    <div className="flex flex-col ">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <table className="min-w-full divide-y divide-neutral-400 ">
              <thead className="bg-version2-400">
                <tr className="divide-x divide-neutral-300 ">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    Semester
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    SKS Diambil
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    SKS Luus
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                  >
                    IPK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400  text-neutral-800 font-bold text-center ">
                <tr>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm  ">
                    3
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm  ">
                    108
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm  ">
                    96
                  </td>
                  <td className="px-6 py-4  border-r  whitespace-nowrap text-sm ">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    3
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    108
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    96
                  </td>
                  <td className="px-6 py-4  border-r  whitespace-nowrap text-sm ">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    3
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    108
                  </td>
                  <td className="px-6 py-4 border-r  whitespace-nowrap text-sm ">
                    96
                  </td>
                  <td className="px-6 py-4  border-r  whitespace-nowrap text-sm ">
                    4.00
                  </td>
                </tr>
                <tr>
                  <td scope="col" className="text-centerpy-4 " colSpan={3}>
                    Rata-rata
                  </td>
                  <td className="col-span-4 py-4 ">4.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-end"
        onClick={() => {
          setShowDetail(true);
        }}
      >
        <Button
          type="button"
          className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-3 w-[200px] md:w-[240px] lg:w-[300px]font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 "
        >
          <h1>Lihat Detail Nilai</h1>
        </Button>
      </div>
    </div>
  );
};
